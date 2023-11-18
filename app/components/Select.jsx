"use client";

import { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";

const Select = ({ options, value, setValue, label }) => {
  const ref = useRef();
  // const [options, setValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleClick = (division) => {
    setValue(division);
    setShowOptions((prev) => !prev);
  };

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setShowOptions((prev) => !prev)}
        className="border border-primary py-2.5 pl-2 rounded cursor-pointer relative"
      >
        <span
          className={`bg-[#F6F6F6] inline-block px-2 transition-all duration-200 ${
            value ? "-translate-y-[22px] translate-x-2 text-sm" : "px-3"
          }`}
        >
          {label}
        </span>
        <p className="absolute top-2.5 left-4">{value}</p>
      </div>

      {showOptions && (
        <m.div
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          className="w-full bg-white py-3 shadow-[0px_0px_8px_#ddd] mt-5 absolute top-7 left-0 z-10"
        >
          {options?.map((division) => (
            <div
              onClick={() => handleClick(division.name)}
              key={division._id}
              className="py-1 text-center hover:bg-secondary/10 hover:text-secondary cursor-pointer"
            >
              {division.name}
            </div>
          ))}
        </m.div>
      )}
    </div>
  );
};

export default Select;
