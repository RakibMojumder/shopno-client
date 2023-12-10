"use client";

import { useDispatch, useSelector } from "react-redux";
import StarComponent from "../StarComponent";
import { setRating } from "@/redux/features/productSlice";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Rating = () => {
  const dispatch = useDispatch();
  const [showRating, setShowRating] = useState(true);
  const { rating } = useSelector((state) => state.product);

  return (
    <div className="mt-8">
      <div
        onClick={() => setShowRating((prev) => !prev)}
        className="border-b pb-2 flex justify-between cursor-pointer"
      >
        <h3>Ratings</h3>
        <BiChevronDown
          size={24}
          className={`transition-all duration-300 ${
            showRating && "rotate-180"
          }`}
        />
      </div>
      <AnimatePresence initial={false}>
        {showRating && (
          <m.div
            initial={{ height: 0 }}
            animate={{ height: "auto", transition: { duration: 0.5 } }}
            exit={{ height: 0, transition: { duration: 0.5 } }}
            className="pl-3 mt-3 space-y-0.5 overflow-hidden"
          >
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                onClick={() => dispatch(setRating(5 - index))}
                className={`flex items-center gap-x-2 cursor-pointer p-2 rounded transition-all duration-300 hover:bg-secondary/10 ${
                  rating == 5 - index && "bg-secondary/10"
                }`}
              >
                <span className="inline-flex h-5 w-5 text-sm bg-primary text-white justify-center items-center rounded-full">
                  {5 - index}
                </span>
                <StarComponent star={5 - index} className="gap-x-1" />
                <span
                  className={`${
                    index == 0 ? "hidden" : "block"
                  } text-neutral-600 text-xs`}
                >
                  and up
                </span>
              </div>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rating;
