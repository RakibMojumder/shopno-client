"use client";

import useClickOutside from "@/hook/useClickOutside";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useSelector } from "react-redux";

const SearchResult = ({ isLoading, setShowSearchResult }) => {
  const ref = useRef();
  const router = useRouter();
  useClickOutside(ref, () => setShowSearchResult(false));
  const { searchProducts } = useSelector((state) => state.product);

  const handleSeeMore = () => {
    router.push("/products");
    setShowSearchResult(false);
  };

  const handleNavigate = (id) => {
    router.push(`/product/${id}`);
    setShowSearchResult(false);
  };

  return (
    <div
      ref={ref}
      className="w-[400px] bg-white border border-primary/30 shadow-[0px_0px_8px_#ddd] p-4 pb-2 absolute top-13 left-0"
    >
      {isLoading ? (
        <button
          type="button"
          className="flex justify-center items-center gap-x-3 w-full py-5"
          disabled
        >
          <span className="h-6 w-6 rounded-full inline-block border-2 border-dotted border-neutral-500 animate-spin"></span>
          <span className="font-medium text-neutral-500">Loading</span>
        </button>
      ) : (
        <>
          {searchProducts?.length > 0 && (
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
                  className="text-center py-2 text-lg font-medium mx-auto block hover:underline text-secondary"
                >
                  See More
                </button>
              )}
            </div>
          )}

          {searchProducts.length <= 0 && (
            <div className="text-center py-6 text-neutral-500 font-medium text-lg">
              <p>No products found</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResult;
