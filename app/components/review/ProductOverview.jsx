"use client";

import React, { useState } from "react";
import ReviewNavbar from "./ReviewNavbar";
import Reviews from "./Reviews";
import Shipping from "./Shipping";
import { AnimatePresence } from "framer-motion";
import AddReview from "./AddReview";

const navs = [
  { id: 101, label: "Shipping & Returns" },
  { id: 102, label: "Reviews" },
  { id: 103, label: "Add Review" },
];

const ProductOverview = ({ productId }) => {
  const [reviewNav, setReviewNav] = useState(navs[0]);

  return (
    <div className="mt-10">
      <ReviewNavbar
        navs={navs}
        reviewNav={reviewNav}
        setReviewNav={setReviewNav}
      />
      <div className="p-5 pl-0 overflow-hidden">
        <AnimatePresence initial={false} key="shipping">
          {reviewNav.label == "Shipping & Returns" && <Shipping />}
        </AnimatePresence>
        <AnimatePresence key="reviews">
          {reviewNav.label == "Reviews" && <Reviews productId={productId} />}
        </AnimatePresence>
        <AnimatePresence key="add review">
          {reviewNav.label == "Add Review" && (
            <AddReview productId={productId} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductOverview;
