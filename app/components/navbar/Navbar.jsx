"use client";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NavItems from "./NavItems";
import Layout from "../Layout";
import { useEffect } from "react";
import { useGetLoginUserQuery } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import UserNavMenu from "./UserNavMenu";
import { setCart, setRecentView } from "@/redux/features/cartSlice";
import Cookies from "js-cookie";
import { format } from "date-fns";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isSuccess, isLoading, data } = useGetLoginUserQuery();

  useEffect(() => {
    dispatch(
      setCart(Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [])
    );

    dispatch(
      setRecentView(
        Cookies.get("recent-view") ? JSON.parse(Cookies.get("recent-view")) : []
      )
    );

    if (isLoading) {
      return;
    }

    if (isSuccess) {
      if (!data.success) {
        dispatch(setUser(null));
      } else {
        dispatch(setUser(data.data));
      }
    }
  }, [isLoading, isSuccess, data, dispatch]);

  return (
    <>
      <div className="bg-secondary">
        <Layout>
          <div className="flex items-center justify-between py-2 text-white text-sm">
            <div>
              <p>+880 1829218489</p>
            </div>
            <div>Shopno shopping center.</div>
            <div>{format(new Date(), "PP")}</div>
          </div>
        </Layout>
      </div>
      <div className="bg-white border-b py-2 md:py-4 sticky top-0 z-40">
        <Layout>
          <div className="flex flex-wrap md:flex-nowrap gap-y-2 md:gap-y-0 items-center justify-between md:gap-x-6 lg:gap-x-8 xl:gap-x-14">
            <Logo />
            <SearchBox />
            <div className="hidden sm:flex justify-end md:justify-between items-center flex-1 md:flex-none lg:w-[35%] xl:w-[30%] order-2 md:order-3">
              <NavItems />
              <UserNavMenu />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Navbar;
