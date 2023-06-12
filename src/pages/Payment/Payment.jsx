import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../hooks/useSelectedClass";

const Payment = () => {
  const publicKey = import.meta.env.VITE_PAYMENT_GETWAY;
  const stripePromise = loadStripe(publicKey);
  const { classes } = useSelectedClass();
  const totalPayment = parseFloat(
    classes.reduce((sum, items) => sum + items.price, 0).toFixed(2)
  );
  return (
    <div>
      <h2>Total payment { totalPayment}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm classes={classes} price={totalPayment} />
      </Elements>
    </div>
  );
};

export default Payment;
