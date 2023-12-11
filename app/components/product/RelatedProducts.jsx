"use client";

import { useQuery } from "react-query";
import axios from "@/utils/axios.config";
import Grid from "../Grid";
import Product from "./Product";
import Loader from "../Loaders/Loader";

const RelatedProducts = ({ category, id }) => {
  const { data, isLoading } = useQuery(["products", category, id], async () => {
    const res = await axios.get(
      `/product/get-related-products/${id}?category=${category}`
    );
    return res.data.data;
    console.log(res);
  });

  if (isLoading) return <Loader />;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-2">Related Products</h3>
      <Grid>
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default RelatedProducts;
