"use client";

import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import { motion as m } from "framer-motion";
import { categories } from "@/utils/data";
import Button from "../Button";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { setUser } from "@/redux/features/userSlice";
import toast from "react-hot-toast";
import useClickOutside from "@/hook/useClickOutside";
import Link from "next/link";

const MobileSidNav = ({ setShowMobileSideNav }) => {
  const ref = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showCategory, setShowCategory] = useState(true);
  const user = useSelector((state) => state.user.user);

  useClickOutside(ref, () => setShowMobileSideNav(false));

  const handleLogout = () => {
    setShowMobileSideNav(false);
    router.push("/auth/login");
    Cookies.remove("token");
    dispatch(setUser(null));
    toast.success("You are logged out");
  };

  return (
    <m.div
      className={`fixed inset-0 w-full bg-black/30 z-50 max-h-screen overflow-y-auto sm:hidden`}
    >
      <m.div
        ref={ref}
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { duration: 0.5 } }}
        exit={{ x: "100%", transition: { duration: 0.5 } }}
        className="bg-white fixed top-0 right-0 h-full w-4/5"
      >
        <div className="flex items-center justify-between border-b p-4">
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
        <div className="pl-2 flex flex-col gap-y-2 mt-3">
          <Link href="/" className="pl-6 font-medium">
            About us
          </Link>
          <Link href="/faq" className="pl-6 font-medium">
            FAQ
          </Link>
          <div>
            <div
              onClick={() => setShowCategory((prev) => !prev)}
              className="cursor-pointer flex items-center gap-x-2 py-1 pl-6 font-medium border-b"
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
                  animate={{ height: "auto", transition: { duration: 0.5 } }}
                  exit={{ height: 0, transition: { duration: 0.5 } }}
                  className="overflow-hidden"
                >
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      onClick={() =>
                        router.push(`/product/category/${category.name}`)
                      }
                      className="w-full py-1 pl-6 list-none cursor-pointer border-b"
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
                  className="cursor-pointer font-semibold pl-6 border-b py-1"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </div>
              )}
              <div
                className="cursor-pointer font-semibold pl-6 border-b py-1"
                //   onClick={() => router.push("/orders")}
              >
                Profile
              </div>
              <div
                className="cursor-pointer font-semibold pl-6 border-b py-1"
                onClick={() => router.push("/orders")}
              >
                Orders
              </div>
              <div
                className="cursor-pointer font-semibold pl-6 border-b py-1"
                onClick={handleLogout}
              >
                Logout
              </div>
            </>
          ) : (
            <Button
              handleClick={() => router.push("/auth/login")}
              variant={"filled"}
              size={"small"}
              className="mt-3 ml-6"
            >
              Login
            </Button>
          )}
        </div>
      </m.div>
    </m.div>
  );
};

export default MobileSidNav;
