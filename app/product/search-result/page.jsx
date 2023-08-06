"use client";

import Layout from "@/app/components/Layout";
import Product from "@/app/components/product/Product";
import React from "react";
import { useSelector } from "react-redux";

const SearchResultPage = () => {
  const { searchProducts } = useSelector((state) => state.product);

  return (
    <Layout>
      <div className="pt-10 pb-20">
        <h3 className="text-2xl text-black font-semibold mb-5">
          Search <span className="text-primary">Result</span>
        </h3>
        <div className="grid grid-cols-6 gap-3">
          {searchProducts?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResultPage;
