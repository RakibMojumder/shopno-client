"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import axios from "@/utils/axios.config";
import { useStripe } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { CardElement } from "@stripe/react-stripe-js";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const StripePayment = ({ shipment }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [intentError, setIntentError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const token = Cookies.get("token") ? Cookies.get("token") : "";
  const totalPrice = cart?.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios.post(
        "/payment/create-payment-intent",
        { totalPrice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setClientSecret(res.data.clientSecret);
      }
    };
    getClientSecret();
  }, [totalPrice, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (elements == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setError(error);
    } else {
      setError("");
    }

    // payment intent
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setIntentError(intentError);
      console.log(intentError);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const data = {
        paid: true,
        transactionId: uuidv4(),
        products: cart,
        customerInfo: {
          name: user?.username,
          email: user?.email,
          phone: user?.phone,
          ...shipment,
        },
      };
      const res = await axios.post(`/payment/stripe-payment`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setProcessing(false);
        router.push(`/payment-success?transactionId=${res.data.transactionId}`);
      }
    }
  };

  return (
    <motion.div
      key={"payment"}
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      className="px-5 py-7 rounded-md"
    >
      <h1 className="font-bold text-2xl text-center mb-5">Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="py-4 px-2 bg-white shadow-[0_0_6px_3px_#ddd]  rounded-md">
          <CardElement
            options={{
              style: {
                base: {
                  color: "black",
                  fontSize: "15px",
                  "::placeholder": {
                    color: "black",
                  },
                },
              },
            }}
          />
        </div>
        <button
          className={`w-full mt-5 py-2 text-white rounded-sm font-semibold bg-secondary duration-300 active:scale-90`}
          type="submit"
          disabled={!stripe || processing}
        >
          {processing ? "Loading" : "Pay"}
        </button>
        {error && <p className="text-red-500 mt-4 text-sm">{error.message}</p>}
        {/* {intentError && (
          <p className="text-red-500 mt-4 text-sm">{intentError.message}</p>
        )} */}
      </form>
    </motion.div>
  );
};

export default StripePayment;
