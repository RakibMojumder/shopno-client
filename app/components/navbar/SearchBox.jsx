import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import SearchResult from "../product/SearchResult";
import useDebounce from "@/hook/useDebounce";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);

  return (
    <div className="w-[32%] relative">
      <div className="bg-white relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search here"
          className="w-full py-2 pl-4 border border-neutral-400 rounded-full focus:border-primary focus:outline-none"
        />
        <IoSearchOutline
          size={20}
          // onClick={handleSearch}
          className="absolute top-3 right-5 text-slate-500 cursor-pointer"
        />
      </div>
      {debouncedSearchValue && (
        <SearchResult
          debouncedSearchValue={debouncedSearchValue}
          setSearchValue={setSearchValue}
        />
      )}
    </div>
  );
};

export default SearchBox;
