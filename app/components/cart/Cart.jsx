"use client";

import { RxCross1 } from "react-icons/rx";
import { motion as m } from "framer-motion";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import Button from "../Button";
import {
  decreaseProduct,
  increaseProduct,
  removeFromCart,
  setShowCart,
} from "@/redux/features/cartSlice";
import { numberWithCommas } from "@/utils/numberWithCommas";
import { useRouter } from "next/navigation";
import ProductCount from "../product/ProductCount";

const Cart = () => {
  let total = 0;
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  cart?.forEach((product) => (total += product.quantity * product.price));
  const totalWithComma = numberWithCommas(total);

  const handleNavigate = () => {
    if (cart.length == 0) {
      return;
    }
    dispatch(setShowCart(false));
    router.push("/cart-details");
  };

  return (
    <m.div className="fixed inset-0 max-h-screen flex justify-end bg-black/30 z-50">
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { duration: 0.5 } }}
        exit={{ x: "100%", transition: { duration: 0.5 } }}
        className="fixed top-0 w-full md:w-[390px] h-full bg-white shadow-sm flex flex-col justify-between"
      >
        <div className="text-lg text-black font-medium flex justify-between items-center p-4 border-b border-primary/30 uppercase">
          <h1 className="flex gap-x-2">
            Shopping Bag
            <LiaShoppingBagSolid size={25} />
          </h1>
          <RxCross1
            onClick={() => dispatch(setShowCart(false))}
            size={30}
            className="cursor-pointer"
          />
        </div>

        <div className="flex-1 p-4 space-y-8 overflow-y-auto">
          {cart?.map((product) => (
            <div key={product.name} className="grid grid-cols-12 gap-2">
              <div className="col-span-3">
                <Image
                  src={product.image}
                  alt="product image"
                  width={130}
                  height={80}
                  className="h-20 w-full"
                />
              </div>
              <div className="col-span-8 space-y-1">
                <h1 className="leading-none text-lg text-black">
                  {product.name}
                </h1>
                <p className="text-black font-semibold">৳ {product.price}</p>

                {/* PRODUCT COUNT */}
                <ProductCount
                  productCount={product.quantity}
                  increaseProduct={() => dispatch(increaseProduct(product))}
                  decreaseProduct={() => dispatch(decreaseProduct(product))}
                />
              </div>

              <div className="col-span-1 text-slate-700 flex items-center">
                <RxCrossCircled
                  size={22}
                  className="cursor-pointer"
                  onClick={() => dispatch(removeFromCart(product._id))}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-5 border-t border-primary/30">
          <Button
            handleClick={handleNavigate}
            variant="filled"
            size="large"
            className="py-3 px-8 flex items-center justify-between gap-x-6"
          >
            Continue
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-lg font-semibold">৳ {totalWithComma}</span>
          </Button>
        </div>
      </m.div>
    </m.div>
  );
};

export default Cart;
