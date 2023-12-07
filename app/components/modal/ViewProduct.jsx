import Image from "next/image";
import React, { useRef } from "react";
import StarComponent from "../StarComponent";
import useClickOutside from "@/hook/useClickOutside";
import { motion as m } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const ViewProduct = ({ product, setViewProduct }) => {
  const ref = useRef();
  useClickOutside(ref, () => setViewProduct(false));

  return (
    <m.div
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="h-screen w-full bg-black/30 fixed top-0 left-0 z-40 flex justify-center items-center px-6 sm:px-0"
    >
      <m.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
        exit={{ y: 50, opacity: 0, transition: { duration: 0.2 } }}
        ref={ref}
        className="w-full sm:w-2/3 xl:w-1/3 bg-white p-5 rounded-md relative"
      >
        <Image
          src={product.image}
          alt="product image"
          width={206}
          height={208}
          className="w-full h-56"
        />
        <div className="mt-3">
          <h3>{product.name}</h3>

          <div className="flex items-center justify-between my-4">
            {/* Price */}
            <div className="flex justify-between items-center">
              <div className="flex">
                <p className="font-semibold text-primary text-xl">
                  ৳ {product.price}
                </p>
                <del className="text-sm ml-1">{product.discountPrice}</del>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1">
              <StarComponent star={product.rating} />{" "}
              <span className="leading-none text-sm">
                ({product.totalRating ? product.totalRating : 0}) Rating
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p>
              {product.description ? product.description : "No description"}
            </p>
          </div>
        </div>
        <span
          onClick={() => setViewProduct(false)}
          className="absolute -top-5 -right-2 h-9 w-9 bg-[#ECE3F9] rounded-full flex justify-center items-center"
        >
          <RxCross2 size={26} className="text-secondary" />
        </span>
      </m.div>
    </m.div>
  );
};

export default ViewProduct;
