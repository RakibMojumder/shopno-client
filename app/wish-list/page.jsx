"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import StarComponent from "../components/StarComponent";
import Button from "../components/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useAddToWishListMutation } from "@/redux/api/authApi";
import { toast } from "react-hot-toast";
import cartImage from "@/public/assets/images.png";
import { useEffect } from "react";
import { addToCart } from "@/redux/features/cartSlice";

const WishListPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [addToList, response] = useAddToWishListMutation();

  useEffect(() => {
    if (response?.isLoading) {
      return;
    }

    if (response?.isError) {
      toast.error("could not remove to wish list");
    }

    if (response?.isSuccess) {
      toast.success("Remove from wish list");
    }
  }, [response]);

  const handleRemoveWishList = async (id) => {
    try {
      addToList(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-10 mb-20 bg-white p-8">
      {user?.wishList.length < 1 ? (
        <div className="flex flex-col items-center gap-y-3">
          <h1 className="text-lg font-semibold text-black">
            Your wish list is Empty
          </h1>
          <Image src={cartImage} alt="cart image" height={150} width={200} />
        </div>
      ) : (
        <>
          <h1 className="text-2xl text-black mb-2 font-medium">
            Your <span className="text-primary">WishList</span>
          </h1>
          <div className="space-y-7">
            {user?.wishList?.map((product) => (
              <div
                key={product._id}
                className="grid grid-cols-12 gap-8 p-3 border border-primary/20 rounded"
              >
                <div className="col-span-3">
                  <Image
                    src={product.image}
                    alt="product image"
                    width={130}
                    height={80}
                    className="h-full w-full"
                  />
                </div>
                <div className="col-span-9 space-y-2">
                  <h1 className="text-lg leading-none">{product.name}</h1>
                  <div className="flex gap-x-2">
                    <StarComponent star={product.rating} className="text-xs" />
                    <span className="text-xs">
                      {product.totalRating} Ratings
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <p className="text-2xl text-primary">৳ {product.price}</p>
                    <del>{product?.discountPrice}</del>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <Button
                      handleClick={() =>
                        dispatch(addToCart({ ...product, quantity: 1 }))
                      }
                      size="small"
                      variant="outlined"
                      className="py-1 flex items-center gap-3 text-sm"
                    >
                      Add To Cart <AiOutlineShoppingCart size={20} />
                    </Button>
                    <Button
                      handleClick={() => handleRemoveWishList(product._id)}
                      size="small"
                      variant="outlined"
                      className="px-1"
                    >
                      <FiTrash size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WishListPage;
