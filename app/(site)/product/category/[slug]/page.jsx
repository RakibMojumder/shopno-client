"use client";

import Layout from "@/app/components/Layout";
import Loader from "@/app/components/Loaders/Loader";
import Product from "@/app/components/product/Product";
import { useGetProductsByCategoryQuery } from "@/redux/api/productApi";
import React from "react";

const ProductCategory = ({ params }) => {
  const { isLoading, data } = useGetProductsByCategoryQuery(params.slug);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout>
      <div>
        <h1 className="my-5 text-2xl font-semibold">{params?.slug} Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {data.data.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductCategory;
