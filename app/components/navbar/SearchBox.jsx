import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import SearchResult from "../product/SearchResult";
import useDebounce from "@/hook/useDebounce";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    let value = localStorage.getItem("search");
    if (value) {
      setSearchValue(value);
    } else {
      setSearchValue("");
    }
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setShowSearchResult(true);
    localStorage.setItem("search", e.target.value);
  };

  return (
    <div className="w-[32%] relative">
      <div className="bg-white relative">
        <input
          type="text"
          defaultValue={searchValue}
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Search here"
          className="w-full py-1.5 pl-4 border text-sm border-neutral-400 rounded-full focus:border-primary focus:outline-none"
        />
        <IoSearchOutline
          size={20}
          // onClick={handleSearch}
          className="absolute top-2 right-5 text-slate-500 cursor-pointer"
        />
      </div>
      {debouncedSearchValue && showSearchResult && (
        <SearchResult
          debouncedSearchValue={debouncedSearchValue}
          showSearchResult={showSearchResult}
          setShowSearchResult={setShowSearchResult}
        />
      )}
    </div>
  );
};

export default SearchBox;
