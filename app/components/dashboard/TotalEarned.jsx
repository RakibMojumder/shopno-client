import React from "react";
import { IoDiamondOutline } from "react-icons/io5";

const TotalEarned = () => {
  return (
    <div className="p-2 h-52 rounded-xl flex flex-col gap-y-4 justify-center items-center bg-white">
      <span className="h-16 w-16 rounded-full bg-[#DCFCE7] flex justify-center items-center">
        <IoDiamondOutline size={35} color="#2AC764" />
      </span>
      <div className="text-slate-700 text-center">
        <h1 className="text-3xl font-semibold">10000</h1>
        <h2>Total Earned this month</h2>
      </div>
    </div>
  );
};

export default TotalEarned;
