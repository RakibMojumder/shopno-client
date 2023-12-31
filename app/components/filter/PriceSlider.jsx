"use client";

import { setPriceValue } from "@/redux/features/productSlice";
import { numberWithCommas } from "@/utils/numberWithCommas";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import ReactSlider from "react-slider";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const PriceSlider = () => {
  const dispatch = useDispatch();
  const [showPriceRange, setShowPriceRange] = useState(true);
  const { priceValue } = useSelector((state) => state.product);

  return (
    <div>
      <div
        onClick={() => setShowPriceRange((prev) => !prev)}
        className="border-b pb-2 mb-3 flex justify-between cursor-pointer"
      >
        <h3>Price Range</h3>
        <BiChevronDown
          size={24}
          className={`transition-all duration-300 ${
            showPriceRange && "rotate-180"
          }`}
        />
      </div>

      <AnimatePresence initial={false}>
        {showPriceRange && (
          <m.div
            initial={{ height: 0 }}
            animate={{ height: "auto", transition: { duration: 0.5 } }}
            exit={{ height: 0, transition: { duration: 0.5 } }}
            className="overflow-hidden"
          >
            <ReactSlider
              className="h-[3px] w-full mx-auto bg-black rounded-full mt-8"
              thumbClassName="h-9 w-9 -top-4 -right-2 border text-xs font-medium flex justify-center items-center bg-white cursor-pointer rounded-full shadow-[0px_0px_5px_#c2bdbd]"
              thumbActiveClassName="border outline-none"
              trackClassName="example-track"
              value={priceValue}
              min={0}
              max={10000}
              step={100}
              pearling
              onChange={(values) => {
                dispatch(setPriceValue(values));
              }}
              minDistance={10}
            />
            <div className="flex gap-x-3 justify-between items-center mt-8 text-sm text-neutral-600">
              <div className="text-center border flex-1 py-0.5 rounded">
                <span>Minimum</span>
                <p className="text-base text-primary">
                  ৳ {numberWithCommas(priceValue[0])}
                </p>
              </div>
              <div className="text-3xl">-</div>
              <div className="text-center border flex-1 py-0.5 rounded">
                <span>Maximum</span>
                <p className="text-base text-primary">
                  ৳ {numberWithCommas(priceValue[1])}
                </p>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceSlider;
