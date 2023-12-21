"use client";

import Product from "../product/Product";
import Layout from "../Layout";
import { useGetProductsQuery } from "@/redux/api/productApi";
import Skelton from "../Skelton";
import Button from "../Button";
import { useRouter } from "next/navigation";
import Grid from "../Grid";
import HeaderText from "./HeaderText";

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
        <HeaderText label={"Our Featured Products"} />
        <Grid>
          {isLoading &&
            [...Array(10)].map((_, index) => <Skelton key={index} />)}
          {data?.data?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </Grid>
        <div className="text-center mt-8">
          <Button handleClick={handleClick} variant={"filled"} size={"small"}>
            See All
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturedProducts;
