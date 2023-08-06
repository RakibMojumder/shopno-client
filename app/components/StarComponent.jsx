"use client";

import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const StarComponent = ({ star, className }) => {
  return (
    <div
      className={twMerge("flex items-center text-sm text-primary", className)}
    >
      {[...Array(5).keys()].map((value, index) => {
        const num = index + 1;
        if (star >= num) {
          // return <FaStar key={index} />;
          return <IoIosStar key={index} />;
        } else if (star < num && star > num - 1) {
          // return <FaStarHalfAlt key={index} />;
          return <IoIosStarHalf key={index} />;
        } else {
          return <IoIosStarOutline key={index} />;
        }
      })}
    </div>
  );
};

export default StarComponent;
