import React from "react";
import { FcSalesPerformance } from "react-icons/fc";

const Sales = () => {
  return (
    <div className="p-2 border border-[#f5df86] h-52 rounded-xl flex flex-col gap-y-4 justify-center items-center bg-white">
      <span className="h-16 w-16 rounded-full bg-[#FEF3C7] flex justify-center items-center">
        <FcSalesPerformance size={35} />
      </span>
      <div className="text-slate-700 text-center">
        <h1 className="text-3xl font-semibold">10000</h1>
        <h2>Total Sale this month</h2>
      </div>
    </div>
  );
};

export default Sales;
