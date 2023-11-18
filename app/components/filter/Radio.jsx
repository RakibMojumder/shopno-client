"use client";

import { setSortValue } from "@/redux/features/productSlice";
import { useDispatch } from "react-redux";

const Radio = ({ label, value }) => {
  const dispatch = useDispatch();

  return (
    <label className="radio-container">
      {label}
      <input
        onChange={(e) => dispatch(setSortValue(e.target.value))}
        type="radio"
        name="radio"
        value={value}
      />
      <span className="radio-checkmark"></span>
    </label>
  );
};

export default Radio;
