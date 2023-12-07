"use client";

import RadioGroup from "../RadioGroup";
import { useState } from "react";
import stripe from "@/public/assets/stripe.png";
import ssl from "@/public/assets/ssl.png";
import { motion as m } from "framer-motion";
import Button from "../Button";
import axios from "@/utils/axios.config";
import { useSelector } from "react-redux";
import scrollTop from "@/utils/scrollTop";

const radioOptions = [
  {
    id: "101",
    option: "Stripe",
    image: stripe,
  },
  {
    id: "102",
    option: "SSL Commerz",
    image: ssl,
  },
];

const PaymentMethod = ({ setCurrentStep, shipment }) => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [processing, setProcessing] = useState(false);

  const handleClick = async () => {
    setProcessing(true);
    if (selectedIndex === 1) {
      const res = await axios.post("/payment", {
        shipment,
        username: user.username,
        userEmail: user.email,
        userPhone: user.phone,
        products: cart,
      });

      if (res.data.url) {
        setProcessing(false);
        window.location.replace(res.data.url);
      }
    } else {
      setCurrentStep(3);
      scrollTop();
    }
  };

  return (
    <m.div
      key={"payment-method"}
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
      className="flex flex-col justify-center xl:items-center w-full"
    >
      <h1 className="text-lg font-semibold mb-5">Payment Method</h1>
      <div className="space-y-6 w-full">
        <RadioGroup
          options={radioOptions}
          selectedIndex={selectedIndex}
          currentIndex={currentIndex}
          setSelectedIndex={setSelectedIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Button
          disabled={processing}
          handleClick={handleClick}
          variant="filled"
          size="large"
        >
          {processing ? "Processing" : "Continue"}
        </Button>
      </div>
    </m.div>
  );
};

export default PaymentMethod;
