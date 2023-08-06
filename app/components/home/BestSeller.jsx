import React from "react";
import Product from "../product/Product";
import Layout from "../Layout";

const BestSeller = () => {
  return (
    <Layout>
      <div className="pt-20 pb-28">
        <h3 className="text-3xl font-bold my-5 text-black">
          <span className="text-primary">Best Sellers</span> Products
        </h3>
        <div className="grid grid-cols-6 gap-3">
          {[...Array(6)].map((product, index) => (
            <Product key={index} badge={true} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BestSeller;
