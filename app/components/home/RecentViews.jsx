import React from "react";
import Layout from "../Layout";
import Product from "../product/Product";

const RecentViews = () => {
  return (
    <Layout>
      <div className="pb-28">
        <h1 className="text-3xl font-bold text-black mb-5">
          Recently <span className="text-primary">Views</span>
        </h1>
        <div className="grid grid-cols-6 gap-3">
          {[...Array(6)].map((index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RecentViews;
