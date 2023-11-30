"use client";

import Pagination from "@/app/components/filter/Pagination";
import { setShowFilter, setTotalPage } from "@/redux/features/productSlice";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import axios from "@/utils/axios.config";
import Product from "@/app/components/product/Product";
import Skelton from "@/app/components/Skelton";
import Button from "@/app/components/Button";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { sortValue, categories, priceValue, page, totalPage } = useSelector(
    (state) => state.product
  );
  const { isLoading, data } = useQuery(
    ["products", page, priceValue, categories, sortValue],
    async () => {
      const res = await axios.get(
        `/product?page=${page}&price=${priceValue}&categories=${categories}&sort=${sortValue}`
      );
      dispatch(setTotalPage(res.data.totalPage));
      return res.data.data;
    }
  );

  return (
    <div className="pt-4 pb-20">
      <div className="mb-5 flex justify-between items-center">
        <h3 className="text-2xl text-black font-semibold flex justify-between items-center">
          Products
        </h3>
        <Button
          handleClick={() => dispatch(setShowFilter(true))}
          variant="outlined"
          size="small"
          className="block sm:hidden"
        >
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {isLoading && [...Array(10)].map((_, index) => <Skelton key={index} />)}
        {data?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {totalPage > 1 && <Pagination />}
    </div>
  );
};

export default AllProducts;
