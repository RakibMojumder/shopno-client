import Image from "next/image";
import React from "react";
import StarComponent from "../StarComponent";
import image from "@/public/assets/user.png";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import timeSince from "@/utils/timeSince";

const Review = ({ review }) => {
  return (
    <div className="border-b last-of-type:border-b-0 pb-5">
      <div className="flex items-start gap-x-3">
        <Image alt="user image" src={image} height={40} width={40} />
        <div className="flex-1">
          <div>
            <h3 className="leading-none font-semibold">
              {review.user[0].username}
            </h3>
            <p className="text-xs text-neutral-600">
              {timeSince(new Date(review.reviewDate))}
            </p>
          </div>

          <div className="mt-3">
            <div className="flex items-center gap-x-3">
              <StarComponent
                star={review.rating}
                className={"text-secondary"}
              />
              <span className="text-sm text-neutral-600">{review.rating}</span>
            </div>
            <p className="text-sm">{review.review}</p>
            <div className="flex items-center gap-x-8 mt-4">
              <div className="flex items-start gap-x-1 cursor-pointer">
                <AiOutlineLike size={20} />{" "}
                <span className="text-sm text-neutral-700">Like</span>
              </div>
              <div className="flex items-start gap-x-1 cursor-pointer">
                <AiOutlineDislike size={20} />{" "}
                <span className="text-sm text-neutral-700">Dislike</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
