"use client";

import { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import useClickOutside from "@/hook/useClickOutside";
import { AnimatePresence } from "framer-motion";

const Select = ({ options, value, setValue, label }) => {
  const ref = useRef();
  // const [options, setValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  useClickOutside(ref, () => setShowOptions(false));

  const handleClick = (division) => {
    setValue(division);
    setShowOptions((prev) => !prev);
  };

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => setShowOptions((prev) => !prev)}
        className="bg-white border border-primary/30 pt-4 pb-0.5 pl-2 rounded cursor-pointer relative"
      >
        <span
          className={`inline-block transition-all duration-200 ${
            value
              ? "-translate-y-[22px] translate-x-1 text-xs"
              : "-translate-y-[7px] translate-x-1"
          }`}
        >
          {label}
        </span>
        <p className="absolute top-4 left-3 text-sm">{value}</p>
      </div>

      <AnimatePresence>
        {showOptions && (
          <m.div
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.25 },
            }}
            exit={{ y: 0, opacity: 0, transition: { duration: 0.25 } }}
            className="w-full h-[200px] overflow-y-auto bg-white py-3 border border-primary/30 rounded mt-5 absolute top-6 left-0 z-10"
          >
            {options?.map((value) => (
              <div
                onClick={() => handleClick(value.name)}
                key={value._id ? value._id : value.id}
                className="py-1 text-center hover:bg-secondary/10 hover:text-secondary cursor-pointer"
              >
                {value.name}
              </div>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
