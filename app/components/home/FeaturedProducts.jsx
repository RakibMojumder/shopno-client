"use client";

import Product from "../product/Product";
import Layout from "../Layout";
import { useGetProductsQuery } from "@/redux/api/productApi";
import Skelton from "../Skelton";
import Button from "../Button";
import { useRouter } from "next/navigation";

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
