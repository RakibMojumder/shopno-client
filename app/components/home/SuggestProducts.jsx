import React from "react";
import Layout from "../Layout";
import img from "@/public/assets/shirt.png";
import Image from "next/image";
import Product from "../product/Product";

const SuggestProducts = () => {
  return (
    <Layout>
      <h1 className="text-black text-3xl font-bold mb-5">
        <span className="text-primary">Clothes</span> you would loves
      </h1>
      <div className="grid grid-cols-6 gap-6 pb-28">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {[...Array(4)].map((product, index) => (
              <div
                key={index}
                className={`flex justify-center items-center cursor-pointer rounded-md overflow-hidden ${
                  index == 1
                    ? "bg-[#3BB074]"
                    : index == 2
                    ? "bg-[#a22b2b]"
                    : index == 3
                    ? "bg-[#A083BF]"
                    : "bg-[#FABA59]"
                }`}
              >
                <Image
                  src={img}
                  alt="product image"
                  className="h-44 w-36 duration-300 hover:scale-125"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((product, index) => (
              <Product key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuggestProducts;
