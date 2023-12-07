"use client";

import Grid from "@/app/components/Grid";
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
      {data?.data.length === 0 ? (
        <div>
          <h3 className="my-5 text-lg md:text-xl lg:text-2xl font-semibold text-center">
            No products found
          </h3>
        </div>
      ) : (
        <div>
          <h1 className="my-5 text-lg md:text-xl lg:text-2xl font-semibold">
            {params?.slug} Products
          </h1>
          <Grid>
            {data.data.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Grid>
        </div>
      )}
    </Layout>
  );
};

export default ProductCategory;
