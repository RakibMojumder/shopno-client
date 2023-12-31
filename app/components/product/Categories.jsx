"use client";

import { categories } from "@/utils/data";
import Image from "next/image";
import React from "react";
import Layout from "../Layout";
import { useRouter } from "next/navigation";
import HeaderText from "../home/HeaderText";

const Categories = () => {
  const router = useRouter();
  const handleClick = (category) => {
    router.push(`/product/category/${category}`);
  };
  return (
    <Layout>
      <div className="pt-10 pb-28">
        <HeaderText label={"Categories"} />
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 bg-white divide-x">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleClick(category.name)}
              className="text-center p-4 shrink-0 cursor-pointer space-y-3 border-b"
            >
              <Image
                src={category.img}
                height={60}
                width={60}
                alt="category image"
                className="w-10 h-10 mx-auto"
              />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
