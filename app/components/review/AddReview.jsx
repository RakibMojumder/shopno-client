"use client";

import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import TextArea from "../TextArea";
import Button from "../Button";
import { motion as m } from "framer-motion";
import { useSelector } from "react-redux";
import { useAddReviewMutation } from "@/redux/api/productApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddReview = ({ productId }) => {
  const router = useRouter();
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const user = useSelector((state) => state.user.user);
  const [addReview, { isLoading, isError, isSuccess }] = useAddReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Review Added");
      setReview("");
      setRating(5);
    }
  }, [isSuccess]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleClick = () => {
    router.push("/auth/login");
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const data = {
      rating,
      review,
      productId,
      userId: user._id,
      reviewDate: new Date(),
    };

    addReview({ ...data });
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="w-full sm:w-4/5 md:w-3/5 xl:w-1/2 mx-auto"
    >
      {user ? (
        <div>
          <ReactStars
            count={5}
            onChange={handleRating}
            size={40}
            isHaf
            value={rating}
            // emptyIcon={<i className="far fa-star"></i>}
            // halfIcon={<i className="fa fa-star-half-alt"></i>}
            // fullIcon={<i className="fa fa-star"></i>}
            activeColor="#7C3AED"
          />
          <form onSubmit={handleSubmitReview} className="space-y-5">
            <TextArea
              name={"review"}
              label={"Write your comment"}
              required={true}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <Button variant={"filled"} size={"small"}>
              {isLoading ? "Loading" : "Submit"}
            </Button>
          </form>
          {isError && <p className="mt-5 text-red-500">{isError}</p>}
        </div>
      ) : (
        <div className="h-72 flex justify-center items-center border bg-neutral-200">
          <div className="text-center py-4">
            <h3 className="font-semibold text-primary mb-2">
              You are not Logged in
            </h3>
            <Button handleClick={handleClick} variant={"filled"} size={"small"}>
              Login
            </Button>
          </div>
        </div>
      )}
    </m.div>
  );
};

export default AddReview;
