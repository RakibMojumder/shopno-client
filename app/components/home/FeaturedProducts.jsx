"use client";

import Product from "../product/Product";
import Layout from "../Layout";
import { useGetProductsQuery } from "@/redux/api/productApi";
import Skelton from "../Skelton";
import Button from "../Button";
import { useRouter } from "next/navigation";
import Grid from "../Grid";

const FeaturedProducts = () => {
  const router = useRouter();
  const { isLoading, data } = useGetProductsQuery();

  if (isLoading) {
    return;
  }

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <Layout>
      <div className="pb-28">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-5">
          Our Featured Products
        </h2>
        <Grid>
          {isLoading &&
            [...Array(10)].map((_, index) => <Skelton key={index} />)}
          {data?.data?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </Grid>
        <div className="text-center mt-8">
          <Button handleClick={handleClick} variant={"filled"} size={"small"}>
            Sell All
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturedProducts;
