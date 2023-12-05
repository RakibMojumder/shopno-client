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
import ProductCount from "@/app/components/product/ProductCount";

const CartDetails = () => {
  let total = 0;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  cart?.forEach((product) => (total += product.quantity * product.price));
  const totalWithComma = numberWithCommas(total);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-between pb-20 pt-4 gap-x-5 gap-y-10 md:gap-y-0">
        <div className="w-full md:w-[75%]">
          <h1 className="text-xl font-semibold mb-4">Your Shopping Bag</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-1 pb-10">
              <thead className="border">
                <tr className="bg-primary text-white">
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
              <tbody>
                {cart?.map((product) => (
                  <tr key={product._id} className="bg-white">
                    <td className="flex items-center text-lg font-medium gap-x-5">
                      <Image
                        src={product.image}
                        alt="product image"
                        height={80}
                        width={100}
                        className="h-14 w-14"
                      />
                      <h3 className="leading-none font-normal text-ellipsis">
                        {product.name.slice(0, 20)}
                      </h3>
                    </td>
                    <td className="px-10 text-center font-semibold">
                      ৳{product.price}
                    </td>
                    <td className="px-2 text-center">
                      <ProductCount
                        productCount={product.quantity}
                        increaseProduct={() =>
                          dispatch(increaseProduct(product))
                        }
                        decreaseProduct={() =>
                          dispatch(decreaseProduct(product))
                        }
                      />
                    </td>
                    <td className="text-center font-semibold">
                      ৳ {numberWithCommas(product.quantity * product.price)}
                    </td>

                    <td className="px-10 font-semibold">
                      <RxCrossCircled
                        size={22}
                        className="cursor-pointer mx-auto"
                        onClick={() => dispatch(removeFromCart(product._id))}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <OrderSummary total={total} totalWithComma={totalWithComma} />
      </div>
    </Layout>
  );
};

export default CartDetails;
