"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import SearchResult from "../product/SearchResult";
import useDebounce from "@/hook/useDebounce";
import axios from "@/utils/axios.config";
import { useDispatch, useSelector } from "react-redux";
import { setSearchProducts, setTotalPage } from "@/redux/features/productSlice";
import { MdCancel } from "react-icons/md";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const { sortValue, categories, priceValue, page } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    let value = localStorage.getItem("search");
    if (value) {
      setSearchValue(value);
    } else {
      setSearchValue("");
    }
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      const res = await axios.get(
        `/product/search?value=${debouncedSearchValue}&price=${priceValue}&categories=${categories}&sort=${sortValue}&page=${page}`
      );
      dispatch(setTotalPage(res?.data.totalPage));
      dispatch(setSearchProducts(res?.data?.data));
    };

    handleSearch();
  }, [debouncedSearchValue, categories, priceValue, sortValue, dispatch, page]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setShowSearchResult(true);
    localStorage.setItem("search", e.target.value);
  };

  return (
    <div className="w-full md:flex-1 relative order-last md:order-1">
      <div className="bg-white relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Search here"
          className="w-full py-1.5 md:py-2 pl-4 border text-sm border-neutral-400 rounded-full focus:border-primary focus:outline-none"
        />
        {searchValue ? (
          <MdCancel
            size={22}
            onClick={() => {
              setSearchValue("");
              localStorage.setItem("search", "");
            }}
            className="absolute top-1.5 md:top-2 right-4 text-neutral-400 cursor-pointer"
          />
        ) : (
          <IoSearchOutline
            size={20}
            className="absolute top-1.5 md:top-2 right-4 text-slate-500 cursor-pointer"
          />
        )}
      </div>
      {debouncedSearchValue && showSearchResult && (
        <SearchResult setShowSearchResult={setShowSearchResult} />
      )}
    </div>
  );
};

export default SearchBox;
