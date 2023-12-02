import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const TotalOrder = () => {
  return (
    <div className="p-2 h-52 rounded-xl flex flex-col gap-y-4 justify-center items-center bg-white">
      <span className="h-16 w-16 rounded-full bg-[#EDE9FE] flex justify-center items-center">
        <FaCartShopping size={35} color="#7C3AED" />
      </span>
      <div className="text-slate-700 text-center">
        <h1 className="text-3xl font-semibold">10000</h1>
        <h2>Total Order this month</h2>
      </div>
    </div>
  );
};

export default TotalOrder;
