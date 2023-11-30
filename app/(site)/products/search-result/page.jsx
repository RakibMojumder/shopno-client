"use client";
import Button from "@/app/components/Button";
import Pagination from "@/app/components/filter/Pagination";
import Product from "@/app/components/product/Product";
import { setShowFilter } from "@/redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchResultPage = () => {
  const dispatch = useDispatch();
  const { searchProducts, totalPage } = useSelector((state) => state.product);

  return (
    <div className="pt-5 pb-20">
      <div className="mb-5 flex justify-between items-center">
        <h3 className="text-2xl text-black font-semibold flex justify-between items-center">
          Search Result
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
        {searchProducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {totalPage > 1 && <Pagination />}
    </div>
  );
};

export default SearchResultPage;
