"use client";

import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import { motion as m } from "framer-motion";
import { categories } from "@/utils/data";
import Button from "../Button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { setUser } from "@/redux/features/userSlice";
import toast from "react-hot-toast";

const MobileSidNav = ({ setShowMobileSideNav }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showCategory, setShowCategory] = useState(true);
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    setShowMobileSideNav(false);
    router.push("/auth/login");
    Cookies.remove("token");
    dispatch(setUser(null));
    toast.success("You are logged out");
  };

  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ x: "100%", transition: { duration: 0.5 } }}
      className={`fixed top-0 left-0 w-full bg-white z-50 p-4 h-screen overflow-y-auto`}
    >
      <div className="flex items-center justify-between border-b pb-4">
        <Image
          alt="logo"
          src={Logo}
          width={120}
          height={100}
          className="cursor-pointer"
        />
        <RxCross1
          size={26}
          onClick={() => setShowMobileSideNav(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="mt-6 space-y-3 pl-2">
        <div>
          <div
            onClick={() => setShowCategory((prev) => !prev)}
            className="cursor-pointer flex items-center gap-x-2 mb-2 font-medium"
          >
            Categories
            <BiChevronDown
              size={24}
              className={`transition-all duration-300 ${
                showCategory && "rotate-90"
              }`}
            />
          </div>
          <AnimatePresence initial={false}>
            {showCategory && (
              <m.div
                initial={{ height: 0 }}
                whileInView={{ height: "auto", transition: { duration: 0.5 } }}
                exit={{ height: 0, transition: { duration: 0.5 } }}
                className="overflow-hidden space-y-1"
              >
                {categories.map((category) => (
                  <li
                    key={category.id}
                    onClick={() =>
                      router.push(`/product/category/${category.name}`)
                    }
                    className="w-full pb-0.5 pl-6 list-none cursor-pointer"
                  >
                    {category.name}
                  </li>
                ))}
              </m.div>
            )}
          </AnimatePresence>
        </div>
        {user ? (
          <>
            {user.role == "admin" && (
              <div
                className="cursor-pointer font-medium"
                onClick={() => router.push("/dashboard")}
              >
                Dashboard
              </div>
            )}
            <div
              className="cursor-pointer font-medium"
              //   onClick={() => router.push("/orders")}
            >
              Profile
            </div>
            <div
              className="cursor-pointer font-medium"
              onClick={() => router.push("/orders")}
            >
              Orders
            </div>
            <div className="cursor-pointer font-medium" onClick={handleLogout}>
              Logout
            </div>
          </>
        ) : (
          <Button
            handleClick={() => router.push("/auth/login")}
            variant={"filled"}
            size={"small"}
          >
            Login
          </Button>
        )}
      </div>
    </m.div>
  );
};

export default MobileSidNav;
