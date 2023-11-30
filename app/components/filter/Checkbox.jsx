"use client";

import { setCategories } from "@/redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = ({ name }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);
  const isFound = categories.find((category) => category === name);

  return (
    <label className="checkbox-container" htmlFor={name}>
      <span className="category">{name}</span>
      <input
        onChange={(e) => dispatch(setCategories(e.target.name))}
        name={name}
        type="checkbox"
        id={name}
        checked={isFound}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
