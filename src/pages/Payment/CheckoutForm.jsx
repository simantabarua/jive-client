import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ classes, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  console.log(cardError);
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
     
      
    } else {
      setCardError("");
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "email not found",
            name: user?.displayName || "username not found",
          },
        },
      });

    if (confirmError) {
      console.log("err", confirmError);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        html: `<p class="text-red-500">${cardError}</p>`
      });
    }
    //todo handle error message
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: classes.length,
        instructorEmail: classes.map((item) => item.instructorEmail),
        classesItems: classes.map((item) => item._id),
        classesId: classes.map((item) => item.classId),
        classesNames: classes.map((item) => item.className),
        status: "pending",
      };

      axiosSecure.post("/payments", payment).then((response) => {
        if (response?.data.insertResult?.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Payment Successful",
            text: `Your transaction it is ${transactionId}`
          });
        }
      });
    }
  };

  return (
    <form className="max-w-2xl p-4 space-y-5" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-primary w-64 btn-sm"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
