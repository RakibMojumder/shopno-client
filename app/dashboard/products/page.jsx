"use client";

import axios from "@/utils/axios.config";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { useState } from "react";
import AdminProduct from "@/app/components/dashboard/AdminProduct";
import useDebounce from "@/hook/useDebounce";
import Skelton from "@/app/components/Skelton";
import { MdCancel } from "react-icons/md";

const Products = () => {
  const token = Cookies.get("token");
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue);
  const [showMenuId, setShowMenuId] = useState(null);
  const { isLoading, data, error, refetch } = useQuery(
    ["products", token, debounceValue],
    async () => {
      const res = await axios.get(
        `/admin/get-products?search=${debounceValue}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.data;
    }
  );

  const handleShowMenuId = (id) => {
    if (id === showMenuId) {
      setShowMenuId(null);
    } else {
      setShowMenuId(id);
    }
  };

  return (
    <div className="px-6 sm:px-0">
      <div className="mb-5">
        <div className="sm:w-2/3 2xl:w-1/2 mx-auto relative">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Product"
            className="pl-5 py-2 rounded-full w-full border border-neutral-300"
          />
          {debounceValue && (
            <MdCancel
              size={22}
              onClick={() => {
                setSearchValue("");
              }}
              className="absolute top-2.5 right-4 text-neutral-400 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {isLoading && [...Array(10)].map((_, index) => <Skelton key={index} />)}

        {data?.map((product) => (
          <AdminProduct
            key={product._id}
            refetch={refetch}
            product={product}
            showMenuId={showMenuId}
            handleShowMenuId={handleShowMenuId}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
