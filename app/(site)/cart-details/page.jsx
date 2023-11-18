"use client";

import React from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { numberWithCommas } from "@/utils/numberWithCommas";
import {
  decreaseProduct,
  increaseProduct,
  removeFromCart,
} from "@/redux/features/cartSlice";
import OrderSummary from "../../components/cart/OrderSummary";
import { RxCrossCircled } from "react-icons/rx";

const CartDetails = () => {
  let total = 0;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  cart?.forEach((product) => (total += product.quantity * product.price));
  const totalWithComma = numberWithCommas(total);

  return (
    <Layout>
      <div className="flex justify-between pb-20 pt-8">
        <div className="w-[70%]">
          <h1 className="text-xl font-semibold">Your Shopping Bag</h1>
          <table className="w-full space-x-10 border-separate border-spacing-y-5 pb-10">
            <thead className="border">
              <tr>
                <th className="font-semibold border-y border-primary/20 py-3">
                  Product
                </th>
                <th className="font-semibold border-y border-primary/20 py-3">
                  Price
                </th>
                <th className="font-semibold border-y border-primary/20 py-3">
                  Quantity
                </th>
                <th className="font-semibold border-y border-primary/20 py-3">
                  Total Price
                </th>
                <th className="font-semibold border-y border-primary/20 py-3">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="space-y-10">
              {cart?.map((product) => (
                <tr key={product._id}>
                  <td className="flex items-center text-lg font-medium gap-x-5">
                    <Image
                      src={product.image}
                      alt="product image"
                      height={80}
                      width={100}
                      className="h-20 w-20"
                    />
                    <h3 className="leading-none font-normal">{product.name}</h3>
                  </td>
                  <td className="px-10 text-center font-semibold">
                    ৳{product.price}
                  </td>
                  <td className="px-2 text-center">
                    <div className="inline-flex items-center text-neutral-600 h-8 border border-black/80 divide-x-[1px] divide-black">
                      <button
                        onClick={() => dispatch(increaseProduct(product))}
                        className="px-3 h-full text-3xl flex justify-center items-center"
                      >
                        +
                      </button>
                      <span className="w-14 h-full flex justify-center items-center text-2xl font-medium">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(decreaseProduct(product))}
                        disabled={product.quantity <= 1}
                        className="px-3 h-full text-3xl disabled:cursor-not-allowed flex justify-center items-center"
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="text-center font-semibold">
                    ৳ {numberWithCommas(product.quantity * product.price)}
                  </td>

                  <td className="px-10 text-center font-semibold">
                    <RxCrossCircled
                      size={22}
                      className="cursor-pointer"
                      onClick={() => dispatch(removeFromCart(product._id))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <OrderSummary total={total} totalWithComma={totalWithComma} />
      </div>
    </Layout>
  );
};

export default CartDetails;
