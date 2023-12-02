"use client";

import { RxCross1 } from "react-icons/rx";
import StarComponent from "../StarComponent";
import Checkbox from "./Checkbox";
import PriceSlider from "./PriceSlider";
import Radio from "./Radio";
import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "@/redux/features/productSlice";
import { useMediaQuery } from "react-responsive";
import { motion as m } from "framer-motion";
import Button from "../Button";

const Filter = () => {
  const dispatch = useDispatch();
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
          ? "fixed top-0 left-0 w-full h-full overflow-y-auto md:static z-50 md:w-[250px] block"
          : "hidden md:block"
      } md:w-[230px] md:block`}
    >
      <div className="bg-white p-4">
        <div className="mb-4 flex justify-between items-center sticky top-0 left-0 xl:static z-40 xl:z-auto bg-white pb-2 border-b sm:border-none">
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
          <h3 className="border-b pb-2">Categories</h3>
          <div className="pl-5 mt-3">
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
          </div>
        </div>

        {/* SORT BY PRICE */}
        <div className="mt-8">
          <h3 className="border-b pb-2">Sort By Price</h3>
          <div className="pl-5 mt-3">
            <Radio label="Low To Hight" value={"price"} />
            <Radio label="Hight To Low" value={"-price"} />
          </div>
        </div>

        {/* SORT BY RATINGS */}
        <div className="mt-8">
          <h3 className="border-b pb-2">Ratings</h3>
          <StarComponent star={5} />
        </div>

        <Button
          onClick={() => dispatch(setShowFilter(false))}
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
