import { numberWithCommas } from "@/utils/numberWithCommas";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const TotalOrder = ({ amount, label }) => {
  return (
    <div className="p-2 h-52 rounded-xl flex flex-col gap-y-4 justify-center items-center bg-white border">
      <span className="h-16 w-16 rounded-full bg-[#EDE9FE] flex justify-center items-center">
        <FaCartShopping size={35} color="#7C3AED" />
      </span>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">{numberWithCommas(amount)}</h1>
        <h2 className="font-medium">Total Order this {label}</h2>
      </div>
    </div>
  );
};

export default TotalOrder;
