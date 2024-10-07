import { numberWithCommas } from "@/utils/numberWithCommas";
import React from "react";
import { IoDiamondOutline } from "react-icons/io5";

const TotalEarned = ({ amount, label }) => {
  return (
    <div className="p-2 h-52 rounded-xl flex flex-col gap-y-4 justify-center items-center bg-white border">
      <span className="h-16 w-16 rounded-full bg-[#DCFCE7] flex justify-center items-center">
        <IoDiamondOutline size={35} color="#2AC764" />
      </span>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">{numberWithCommas(amount)}</h1>
        <h2 className="font-medium">Total Earned this {label}</h2>
      </div>
    </div>
  );
};

export default TotalEarned;
