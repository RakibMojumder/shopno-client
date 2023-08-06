"use client";

import Layout from "@/app/components/Layout";
import Loader from "@/app/components/Loader";
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
        <h1>Category</h1>
        <div className="grid grid-cols-6 gap-3">
          {data.data.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductCategory;
