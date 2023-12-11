"use client";

import { RxCross1 } from "react-icons/rx";
import Checkbox from "./Checkbox";
import PriceSlider from "./PriceSlider";
import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "@/redux/features/productSlice";
import { useMediaQuery } from "react-responsive";
import { motion as m } from "framer-motion";
import Button from "../Button";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";
import Rating from "./Rating";
import Sort from "./Sort";

const Filter = () => {
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(true);
  const { showFilter } = useSelector((state) => state.product);
  const isMobile = useMediaQuery({
    query: "(max-width: 620px)",
  });

  return (
    <m.div
      initial={{ x: isMobile ? "100%" : 0 }}
      whileInView={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ x: isMobile ? "100%" : 0, transition: { duration: 0.5 } }}
      className={`${
        showFilter
          ? "fixed top-0 left-0 w-full h-screen md:h-auto overflow-y-auto md:static z-50 md:w-[250px] block"
          : "hidden md:block"
      } md:w-[230px] md:block`}
    >
      <div className="bg-white p-4 h-full md:h-auto">
        <div className="mb-4 flex justify-between items-center z-40 pb-2 border-b sm:border-none">
          <h2 className="text-2xl font-bold">Filter</h2>
          <RxCross1
            onClick={() => dispatch(setShowFilter(false))}
            size={27}
            className="cursor-pointer block md:hidden"
          />
        </div>
        <PriceSlider />

        {/* CATEGORIES */}
        <div className="mt-10">
          <div
            onClick={() => setShowCategories((prev) => !prev)}
            className="border-b pb-2 mb-3 flex justify-between cursor-pointer"
          >
            <h3>Categories</h3>
            <BiChevronDown
              size={24}
              className={`transition-all duration-300 ${
                showCategories && "rotate-180"
              }`}
            />
          </div>
          <AnimatePresence initial={false}>
            {showCategories && (
              <m.div
                initial={{ height: 0 }}
                animate={{ height: "auto", transition: { duration: 0.5 } }}
                exit={{ height: 0, transition: { duration: 0.5 } }}
                className="pl-5 overflow-hidden"
              >
                <Checkbox name="Fashion" />
                <Checkbox name="Beauty" />
                <Checkbox name="Baby" />
                <Checkbox name="Kitchen" />
                <Checkbox name="Health" />
                <Checkbox name="Electronics" />
                <Checkbox name="Automobile" />
                <Checkbox name="Laptop" />
                <Checkbox name="Mobile" />
                <Checkbox name="Gymnasium" />
                <Checkbox name="Home decor" />
                <Checkbox name="Sports" />
              </m.div>
            )}
          </AnimatePresence>
        </div>

        {/* SORT BY RATINGS */}
        <Rating />
        {/* SORT BY PRICE */}
        <Sort />

        <Button
          handleClick={() => dispatch(setShowFilter(false))}
          variant={"filled"}
          size={"large"}
          className="mt-8 sm:hidden"
        >
          Show Result
        </Button>
      </div>
    </m.div>
  );
};

export default Filter;
