"use client";

import RadioGroup from "../RadioGroup";
import { useState } from "react";
import stripe from "@/public/assets/stripe.png";
import ssl from "@/public/assets/ssl.png";

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

const PaymentCart = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <RadioGroup
          options={radioOptions}
          selectedIndex={selectedIndex}
          currentIndex={currentIndex}
          setSelectedIndex={setSelectedIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default PaymentCart;
