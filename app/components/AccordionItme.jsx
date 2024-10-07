"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AccordionItem = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="border-b border-neutral-300">
      <div
        onClick={() => setShow((prev) => !prev)}
        className="py-5 cursor-pointer flex justify-between items-center"
      >
        <h3 className="text-2xl select-none">{title}</h3>
        <div className="text-neutral-600">
          <FiPlus size={24} className={`${show ? "hidden" : "block"}`} />
          <FiMinus size={24} className={`${show ? "block" : "hidden"}`} />
        </div>
      </div>
      <AnimatePresence>
        {show && (
          <m.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <p className="pb-5 text-xl text-neutral-600 select-none">
              {description}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
