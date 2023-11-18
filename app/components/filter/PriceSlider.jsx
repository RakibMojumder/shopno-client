"use client";

import { setPriceValue } from "@/redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactSlider from "react-slider";

const PriceSlider = () => {
  const dispatch = useDispatch();
  const { priceValue } = useSelector((state) => state.product);

  return (
    <div>
      <h3 className="border-b pb-2">Price Range</h3>
      <ReactSlider
        className="h-[3px] w-full mx-auto bg-black rounded-full mt-6"
        thumbClassName="h-9 w-9 -top-4 -right-2 border text-xs font-medium flex justify-center items-center bg-white cursor-pointer rounded-full shadow-[0px_0px_5px_#c2bdbd]"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        thumbActiveClassName="border outline-none"
        trackClassName="example-track"
        value={priceValue}
        min={0}
        max={5000}
        step={100}
        pearling
        onChange={(values) => {
          dispatch(setPriceValue(values));
        }}
        minDistance={10}
      />
    </div>
  );
};

export default PriceSlider;
