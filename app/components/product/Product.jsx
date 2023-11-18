"use client";

import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion as m } from "framer-motion";
import StarComponent from "../StarComponent";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAddToWishListMutation } from "@/redux/api/authApi";
import useIsWishListProduct from "@/hook/useIsWishListProduct";

const Product = ({ badge, product }) => {
  const router = useRouter();
  const isExist = useIsWishListProduct(product._id);
  const user = useSelector((state) => state.user.user);
  const [addToWishList, response] = useAddToWishListMutation();

  const handleWishList = async (e, id) => {
    e.stopPropagation();
    if (!user) {
      return router.replace("/auth/login");
    }

    try {
      addToWishList(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <m.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      onClick={() => router.push(`/product/${product._id}`)}
      className="h-[365px] cursor-pointer bg-white shadow relative overflow-hidden group"
    >
      <Image
        src={product.image}
        alt="product image"
        width={206}
        height={208}
        className="w-full h-52"
      />
      <div className="p-3">
        <div className="font-medium group-hover:text-primary h-16">
          <h3 className="group-hover:underline leading-none">
            {product.name.length > 50
              ? product.name.slice(0, 45) + "..."
              : product.name}
          </h3>
        </div>

        <div className="flex gap-1 mb-3">
          <StarComponent star={product.rating} />{" "}
          <span className="leading-none text-sm">({product.totalRating})</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex">
            <p className="font-semibold text-primary text-xl">
              ৳ {product.price}
            </p>
            <del className="text-sm ml-1">{product.discountPrice}</del>
          </div>

          <button
            onClick={(e) => handleWishList(e, product._id)}
            className="text-primary"
          >
            {isExist ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}
          </button>
        </div>
      </div>
      {badge && (
        <p className="bg-primary py-1 text-sm text-center text-white absolute top-6 -left-16 w-full -rotate-45">
          Best Seller
        </p>
      )}
    </m.div>
  );
};

export default Product;
