"use client";

import RadioGroup from "../RadioGroup";
import { useState } from "react";
import stripe from "@/public/assets/stripe.png";
import ssl from "@/public/assets/ssl.png";
import { motion as m } from "framer-motion";
import Button from "../Button";
import axios from "@/utils/axios.config";
import { useSelector } from "react-redux";

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

  const handleClick = async () => {
    if (selectedIndex === 1) {
      const res = await axios.post("/payment", {
        shipment,
        username: user.username,
        userEmail: user.email,
        userPhone: user.phone,
        products: cart,
      });
      console.log(res);
      if (res.data.url) {
        window.location.replace(res.data.url);
      }
    }
  };

  return (
    <m.div
      key={"payment-method"}
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
      className="flex flex-col justify-center items-center h-96 w-full"
    >
      <div className="w-2/3 space-y-6">
        <RadioGroup
          options={radioOptions}
          selectedIndex={selectedIndex}
          currentIndex={currentIndex}
          setSelectedIndex={setSelectedIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Button handleClick={handleClick} variant="filled" size="large">
          Continue
        </Button>
      </div>
    </m.div>
  );
};

export default PaymentMethod;
