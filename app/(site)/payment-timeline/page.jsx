"use client";

import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Login from "../../components/cart/Login";
import ShipmentDetails from "../../components/cart/ShipmentDetails";
import PaymentMethod from "../../components/cart/PaymentMethod";
import { AnimatePresence } from "framer-motion";
import OrderDetails from "../../components/cart/OrderDetails";

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
    id: 103,
    step: "Payment Method",
    details: "Select your payment method",
  },
  {
    id: 104,
    step: "Payment",
    details: "Pay your payment to get your selected product and be happy",
  },
];

const PaymentTimeLine = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const user = useSelector((state) => state.user.user);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  useEffect(() => {
    if (user) {
      setCurrentStep(1);
    }
  }, [user]);

  return (
    <div className="min-h-screen w-[90%] mx-auto">
      <h1 className="text-2xl font-semibold mt-10 mb-5">Payment</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          {steps.map((step, i) => (
            <div key={step.id} className="">
              <div className="flex gap-3 items-center">
                <span className="w-10">
                  {currentStep === i && (
                    <FiAlertCircle size={33} className="text-red-500" />
                  )}
                  {currentStep > i && (
                    <BsCheckCircle size={32} className="text-secondary" />
                  )}
                  {currentStep < i && <BsCircle size={30} />}
                </span>
                <div className="flex-1">
                  <h4
                    className={`text-lg font-medium ${
                      currentStep === i && "text-red-500"
                    } ${currentStep < i && "text-black"} ${
                      currentStep > i && "text-secondary"
                    }`}
                  >
                    {step.step}
                  </h4>
                  <p className="leading-none text-neutral-600">
                    {step.details}
                  </p>
                </div>
              </div>
              <div
                className={`${
                  i === 3 && "hidden"
                } bg-primary/40 h-9 w-[2px] my-3 ml-3.5`}
              ></div>
            </div>
          ))}
        </div>
        <div className="col-span-5 border-r border-l">
          <AnimatePresence>
            {currentStep === 0 && <Login setCurrentStep={setCurrentStep} />}
          </AnimatePresence>
          <AnimatePresence>
            {currentStep === 1 && (
              <ShipmentDetails
                district={district}
                division={division}
                address={address}
                postCode={postCode}
                setDistrict={setDistrict}
                setDivision={setDivision}
                setAddress={setAddress}
                setPostCode={setPostCode}
                setCurrentStep={setCurrentStep}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {currentStep === 2 && (
              <PaymentMethod
                setCurrentStep={setCurrentStep}
                shipment={{ district, division, address, postCode }}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-4">
          <OrderDetails />
        </div>
      </div>
    </div>
  );
};

export default PaymentTimeLine;
