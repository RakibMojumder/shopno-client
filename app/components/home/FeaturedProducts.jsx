"use client";

import Product from "../product/Product";
import Layout from "../Layout";
import { useGetProductsQuery } from "@/redux/api/productApi";

const FeaturedProducts = () => {
  const { isLoading, data } = useGetProductsQuery();

  if (isLoading) {
    return;
  }

  return (
    <Layout>
      <div className="pb-28">
        <h2 className="text-3xl font-bold text-black mb-5">
          Our <span className="text-primary">Featured</span> Products
        </h2>
        <div className="grid grid-cols-6 gap-3">
          {data?.data?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FeaturedProducts;
