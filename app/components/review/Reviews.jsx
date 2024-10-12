"use client";

import { useGetReviewsQuery } from "@/redux/api/productApi";
import Review from "./Review";
import { motion as m } from "framer-motion";
import Loader from "../Loaders/Loader";

const Reviews = ({ productId }) => {
  const { isLoading, data } = useGetReviewsQuery(productId);

  if (isLoading) return <Loader />;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="space-y-3"
    >
      {data.data.length < 1 && (
        <p className="text-center text-lg font-semibold mt-4">
          No Review Found
        </p>
      )}
      {data.data.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </m.div>
  );
};

export default Reviews;
