"use client";

import Product from "../product/Product";
import Layout from "../Layout";
import { useGetProductsQuery } from "@/redux/api/productApi";
import Skelton from "../Skelton";

const FeaturedProducts = () => {
  const { isLoading, data } = useGetProductsQuery();

  if (isLoading) {
    return;
  }

  return (
    <Layout>
      <div className="pb-28">
        <h2 className="text-3xl font-semibold text-black mb-5">
          Our Featured Products
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {isLoading &&
            [...Array(10)].map((_, index) => <Skelton key={index} />)}
          {data?.data?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FeaturedProducts;
