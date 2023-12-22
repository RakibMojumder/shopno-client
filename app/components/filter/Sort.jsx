"use client";

import { BiChevronDown } from "react-icons/bi";
import Radio from "./Radio";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Sort = () => {
  const [showSort, setShowSort] = useState(true);

  return (
    <div className="mt-8">
      <div
        onClick={() => setShowSort((prev) => !prev)}
        className="border-b pb-2 mb-3 flex justify-between cursor-pointer"
      >
        <h3>Sort By Price</h3>
        <BiChevronDown
          size={24}
          className={`transition-all duration-300 ${showSort && "rotate-180"}`}
        />
      </div>
      <AnimatePresence initial={false}>
        {showSort && (
          <m.div
            initial={{ height: 0 }}
            animate={{ height: "auto", transition: { duration: 0.5 } }}
            exit={{ height: 0, transition: { duration: 0.5 } }}
            className="pl-5 overflow-hidden"
          >
            <Radio label="Default" value={""} />
            <Radio label="Low To Hight" value={"price"} />
            <Radio label="Hight To Low" value={"-price"} />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sort;
