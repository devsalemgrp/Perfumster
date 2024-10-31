import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Modal from "react-modal";

const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
    } else {
      setError(null);
      // Call your backend to create the PaymentIntent
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });

      const paymentIntent = await response.json();

      if (paymentIntent.error) {
        setError(paymentIntent.error);
        setIsProcessing(false);
      } else {
        setSuccess(true);
        setIsProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>Payment successful!</div>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const StripeModal = ({ isOpenModal, closeModal }) => {
  console.log("Modal opened");
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "400px",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#1a202c",
        },
      }}
    >
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Modal>
  );
};

export default StripeModal;
