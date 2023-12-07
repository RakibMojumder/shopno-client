import React from "react";
import { twMerge } from "tailwind-merge";

const Grid = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-2 sm:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
