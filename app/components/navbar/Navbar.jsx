"use client";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NavItems from "./NavItems";
import Layout from "../Layout";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useGetLoginUserQuery } from "@/redux/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import UserNavMenu from "./UserNavMenu";
import { setCart } from "@/redux/features/cartSlice";
import Cookies from "js-cookie";

const Navbar = () => {
  const dispatch = useDispatch();
  const { showAuthModal } = useSelector((state) => state.user);
  const { isSuccess, isLoading, data } = useGetLoginUserQuery();

  useEffect(() => {
    dispatch(
      setCart(Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [])
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
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit..
            </div>
            <div>Lorem ipsum dolor.</div>
          </div>
        </Layout>
      </div>
      <div className="bg-white shadow-md py-4 sticky top-0 z-40">
        <Layout>
          <div className="flex items-center gap-x-8">
            <Logo />
            <SearchBox />
            <NavItems />
            <UserNavMenu />
          </div>
        </Layout>
      </div>
      <AnimatePresence>{showAuthModal && <AuthModal />}</AnimatePresence>
    </>
  );
};

export default Navbar;
