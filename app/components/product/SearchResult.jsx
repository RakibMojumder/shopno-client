import { useEffect, useState } from "react";
import axios from "@/utils/axios.config";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSearchProducts } from "@/redux/features/productSlice";

const SearchResult = ({ debouncedSearchValue, setSearchValue }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchProducts } = useSelector((state) => state.product);

  useEffect(() => {
    const handleSearch = async () => {
      if (debouncedSearchValue) {
        const res = await axios.get(
          `/product/search?value=${debouncedSearchValue}`
        );
        dispatch(setSearchProducts(res.data.data));
      }

      return null;
    };

    handleSearch();
  }, [debouncedSearchValue, dispatch]);

  const handleSeeMore = () => {
    setSearchValue("");
    router.push("/product/search-result");
  };

  const handleNavigate = (id) => {
    setSearchValue("");
    router.push(`/product/${id}`);
  };

  return (
    <div className="w-[400px] bg-white shadow-[0px_0px_8px_#ddd] p-4 pb-2 absolute top-13 left-0">
      {searchProducts.length > 0 ? (
        <div className="space-y-2">
          {searchProducts?.slice(0, 4).map((product) => (
            <div
              key={product._id}
              onClick={() => handleNavigate(product._id)}
              className={`flex border-b border-slate-300 p-2 gap-x-2 group cursor-pointer ${
                searchProducts.length <= 4 && "last-of-type:border-none"
              }`}
            >
              <Image
                src={product.image}
                alt="product image"
                height={50}
                width={50}
                className="h-12 w-12"
              />
              <h1 className="leading-none group-hover:text-primary group-hover:underline">
                {product.name}
              </h1>
            </div>
          ))}

          {searchProducts.length > 4 && (
            <button
              onClick={handleSeeMore}
              className="text-primary text-center py-2 text-lg font-medium mx-auto block"
            >
              See More
            </button>
          )}
        </div>
      ) : (
        <div className="text-center py-6 text-neutral-500 font-medium text-lg">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;