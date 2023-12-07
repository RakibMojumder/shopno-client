import { numberWithCommas } from "@/utils/numberWithCommas";
import React from "react";
import { FaUser } from "react-icons/fa";

const TotalUsers = ({ amount, label }) => {
  return (
    <div className="p-2 h-52 rounded-xl flex flex-col gap-y-4 justify-center items-center bg-white">
      <span className="h-16 w-16 rounded-full bg-[#E0E7FF] flex justify-center items-center">
        <FaUser size={35} color="#5f64f4" />
      </span>
      <div className="text-slate-700 text-center">
        <h1 className="text-3xl font-semibold">{numberWithCommas(amount)}</h1>
        <h2>New Users this {label}</h2>
      </div>
    </div>
  );
};

export default TotalUsers;
