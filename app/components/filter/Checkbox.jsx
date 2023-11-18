"use client";

import { setCategories } from "@/redux/features/productSlice";
import { useDispatch } from "react-redux";

const Checkbox = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <label className="checkbox-container" htmlFor={name}>
      <span className="category">{name}</span>
      <input
        onChange={(e) => dispatch(setCategories(e.target.name))}
        name={name}
        type="checkbox"
        id={name}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
