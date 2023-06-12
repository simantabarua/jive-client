import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useLoadSelectClass from "../../hooks/useLoadSelectClass";

const Payment = () => {
  const publicKey = import.meta.env.VITE_PAYMENT_GETWAY;
  const stripePromise = loadStripe(publicKey);
  const { selectedClasses } = useLoadSelectClass();
  const totalPayment = parseFloat(
    selectedClasses.reduce((sum, items) => sum + items.price, 0).toFixed(2)
  );
  return (
    <div>
      <h2>Total payment { totalPayment}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm classes={selectedClasses} price={totalPayment} />
      </Elements>
    </div>
  );
};

export default Payment;
