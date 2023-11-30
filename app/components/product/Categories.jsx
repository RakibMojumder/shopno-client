"use client";

import { categories } from "@/utils/data";
import Image from "next/image";
import React from "react";
import Layout from "../Layout";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const handleClick = (category) => {
    router.push(`/product/category/${category}`);
  };
  return (
    <Layout>
      <div className="flex items-center py-10 bg-white divide-x overflow-x-auto custom-scroll">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleClick(category.label)}
            className="text-center px-6 shrink-0 cursor-pointer space-y-3"
          >
            <Image
              src={category.img}
              height={100}
              width={100}
              alt="category image"
              className="w-14 h-14 mx-auto"
            />
            <h3>{category.label}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
