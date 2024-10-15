"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import SearchResult from "../product/SearchResult";
import useDebounce from "@/hook/useDebounce";
import axios from "@/utils/axios.config";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchProducts,
  setSearchValue,
  setTotalPage,
} from "@/redux/features/productSlice";
import { MdCancel } from "react-icons/md";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const { sortValue, categories, priceValue, rating, page, searchValue } =
    useSelector((state) => state.product);
  const debouncedSearchValue = useDebounce(searchValue);

  useEffect(() => {
    const handleSearch = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `/product/search?value=${debouncedSearchValue}&price=${priceValue}&categories=${categories}&sort=${sortValue}&page=${page}&rating=${rating}`
      );
      setIsLoading(false);
      dispatch(setTotalPage(res?.data.totalPage));
      dispatch(setSearchProducts(res?.data?.data));
    };

    handleSearch();
  }, [
    debouncedSearchValue,
    categories,
    rating,
    priceValue,
    sortValue,
    dispatch,
    page,
  ]);

  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
    setShowSearchResult(true);
  };

  return (
    <div className="w-full lg:w-80 relative order-last lg:order-1">
      <div className="bg-white relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Search here"
          className="w-full py-1.5 pl-4 border text-sm border-neutral-400 focus:border-secondary focus:outline-none"
        />
        {searchValue ? (
          <MdCancel
            size={22}
            onClick={() => {
              dispatch(setSearchValue(""));
            }}
            className="absolute top-1.5 right-4 text-neutral-400 cursor-pointer z-10"
          />
        ) : (
          <IoSearchOutline
            size={20}
            className="absolute top-1.5 right-4 text-slate-500 cursor-pointer z-10"
          />
        )}
      </div>
      {showSearchResult && (
        <SearchResult
          isLoading={isLoading}
          setShowSearchResult={setShowSearchResult}
        />
      )}
    </div>
  );
};

export default SearchBox;
