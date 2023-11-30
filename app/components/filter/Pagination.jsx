"use client";

import { setPage } from "@/redux/features/productSlice";
import scrollTop from "@/utils/scrollTop";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const { totalPage, page } = useSelector((state) => state.product);

  const handleClick = (index) => {
    dispatch(setPage(index));
    scrollTop();
  };

  return (
    <div className="text-center mt-8">
      <div className="inline-flex gap-3">
        {[...Array(totalPage)].map((_, index) => (
          <button
            key={index}
            index={index}
            page={page}
            onClick={() => handleClick(index)}
            className={`px-3.5 py-1 border border-black/50 ${
              index === page ? "bg-black/90 text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
