"use client";

import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion as m } from "framer-motion";
import StarComponent from "../StarComponent";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useAddToWishListMutation } from "@/redux/api/authApi";
import useIsWishListProduct from "@/hook/useIsWishListProduct";
import { addRecentView } from "@/redux/features/cartSlice";
import { twMerge } from "tailwind-merge";

const Product = ({ badge, product, className }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isExist = useIsWishListProduct(product._id);
  const user = useSelector((state) => state.user.user);
  const [addToWishList, response] = useAddToWishListMutation();

  const handleClick = (product) => {
    dispatch(addRecentView(product));
    router.push(`/product/${product._id}`);
  };

  const handleWishList = async (e, id) => {
    e.stopPropagation();
    if (!user) {
      return router.push("/auth/login");
    }

    try {
      addToWishList(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true }}
      onClick={() => handleClick(product)}
      className={twMerge(
        "h-[310px] md:h-[350px] cursor-pointer bg-white shadow relative overflow-hidden group",
        className
      )}
    >
      <Image
        src={product.image}
        alt="product image"
        width="0"
        height="0"
        sizes="100vw"
        className="h-40 md:h-52 w-full"
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
          <span className="leading-none text-sm">
            ({product.totalRating ? product.totalRating : 0})
          </span>
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
        <p className="bg-secondary py-1 text-sm text-center text-white absolute top-6 -left-16 w-full -rotate-45">
          Best Seller
        </p>
      )}
    </m.div>
  );
};

export default Product;
