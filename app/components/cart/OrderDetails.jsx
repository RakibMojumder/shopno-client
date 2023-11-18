"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="space-y-5">
      {cart.map((product) => (
        <div key={product._id} className="flex items-center gap-4">
          <div className="relative h-20 w-20 border">
            <Image
              alt="product image"
              src={product.image}
              height={150}
              width={150}
              className="w-full h-full"
            />
            <span className="absolute -top-3 -right-2 h-5 w-5 bg-primary text-white rounded-full flex justify-center items-center font-medium text-sm">
              {product.quantity}
            </span>
          </div>
          <h1 className="flex-1">{product.name}</h1>
          <p className="font-medium">৳{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
