"use client";

import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Login from "../components/cart/Login";
import ShipmentDetails from "../components/cart/ShipmentDetails";
import Payment from "../components/cart/Payment";
import { AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 101,
    step: "Login",
    details: "Login your account to proceed",
  },
  {
    id: 102,
    step: "Details",
    details:
      "Provide you shipment details correctly to get your selected product",
  },
  {
    id: 102,
    step: "Payment Method",
    details: "Select your payment method",
  },
  {
    id: 103,
    step: "Payment",
    details: "Pay your payment to get your selected product and be happy",
  },
];

const PaymentTimeLine = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const user = useSelector((state) => state.user.user);

  // useEffect(() => {
  //   if (user) {
  //     setCurrentStep(1);
  //   }
  // }, [user]);

  return (
    <div className="w-[90%] mx-auto pt-10 pb-20 grid grid-cols-12 gap-5 divide-x-[1px] divide-primary/20">
      <div className="col-span-3">
        {steps.map((step, i) => (
          <div key={step.id} className="">
            <div className="flex gap-3 items-center">
              <span className="w-10">
                {currentStep === i && (
                  <FiAlertCircle size={30} className="text-red-500" />
                )}
                {currentStep > i && (
                  <BsCheckCircle size={30} className="text-primary" />
                )}
                {currentStep < i && <BsCircle size={30} />}
              </span>
              <div className="flex-1">
                <h4
                  className={`text-lg font-medium ${
                    currentStep === i && "text-red-500"
                  } ${currentStep < i && "text-black"} ${
                    currentStep > i && "text-primary"
                  }`}
                >
                  {step.step}
                </h4>
                <p className="leading-none text-neutral-600">{step.details}</p>
              </div>
            </div>
            <div
              className={`${i === 3 && "hidden"} ${
                currentStep > i ? "bg-primary" : "bg-black"
              } h-9 w-[2px] my-3 ml-3.5`}
            ></div>
          </div>
        ))}
      </div>
      <div className="col-span-5 overflow-hidden">
        <AnimatePresence>
          {currentStep === 0 && <Login setCurrentStep={setCurrentStep} />}
        </AnimatePresence>
        {currentStep === 1 && (
          <ShipmentDetails setCurrentStep={setCurrentStep} />
        )}
        {currentStep === 2 && <Payment />}
      </div>
      <div className="col-span-4"></div>
    </div>
  );
};

export default PaymentTimeLine;
