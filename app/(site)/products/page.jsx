"use client";

import Button from "@/app/components/Button";
import Layout from "@/app/components/Layout";
import Filter from "@/app/components/filter/Filter";
import Pagination from "@/app/components/filter/Pagination";
import Product from "@/app/components/product/Product";
import {
  setCategories,
  setPage,
  setPriceValue,
  setShowFilter,
  setSortValue,
} from "@/redux/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { searchProducts, totalPage } = useSelector((state) => state.product);

  useEffect(() => {
    return () => {
      dispatch(setPage(0));
      dispatch(setSortValue(""));
      dispatch(setCategories([]));
      dispatch(setPriceValue([0, 10000]));
    };
  }, [dispatch]);

  return (
    <Layout>
      <div className="flex gap-x-5 mt-5 md:mt-0">
        <Filter />
        <div className="flex-1 pb-20">
          <div className="mt:0 mb-5 sm:my-5 flex justify-center items-center">
            <Button
              handleClick={() => dispatch(setShowFilter(true))}
              variant="outlined"
              size="small"
              className="block xl:hidden"
            >
              Filter
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
            {searchProducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>

          {totalPage > 1 && <Pagination />}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
