"use client";

import { setUser } from "@/redux/features/userSlice";
import { motion as m } from "framer-motion";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import userImg from "@/public/assets/user.png";
import Link from "next/link";
import { RiUser3Line } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const UserMenu = ({ target, setShowUserMenu }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const handler = (e) => {
      if (!target.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [target, setShowUserMenu]);

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(setUser(null));
    setShowUserMenu(false);
    toast.success("You are logged out");
    router.push("/auth/login");
  };

  return (
    <m.div
      key="user menu"
      initial={{ opacity: 0, y: -30 }}
      exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
      className="w-56 py-2 absolute top-14 right-5 lg:right-16 xl:right-24 border bg-white shadow-[0px_0px_4px_#ddd] rounded z-50"
    >
      {/* <div className="border-b w-full p-4 mb-2 text-center">
        <Image
          src={userImg}
          alt="user image"
          height={160}
          className="w-32 rounded-full mx-auto"
        />
        <h1>{user.username}</h1>
        <p>{user.email}</p>
      </div> */}
      <ul>
        {user.role === "user" && (
          <li className="py-1.5 px-5 hover:bg-secondary/10 hover:text-secondary cursor-pointer">
            <Link href={"/profile"} className="flex items-center gap-x-3">
              <RiUser3Line size={18} />
              <p>Profile</p>
            </Link>
          </li>
        )}

        <li className="py-1.5 px-5 hover:bg-secondary/10 hover:text-secondary cursor-pointer">
          <Link href={"/orders"} className="flex items-center gap-x-3">
            <FiShoppingCart size={18} />
            <p>Orders</p>
          </Link>
        </li>

        {user.role == "admin" && (
          <li className="py-1.5 px-5 hover:bg-secondary/10 hover:text-secondary cursor-pointer">
            <Link href={"/dashboard"} className="flex items-center gap-x-3">
              <MdOutlineDashboard size={18} />
              <p>Dashboard</p>
            </Link>
          </li>
        )}

        <li
          onClick={handleLogout}
          className="py-1.5 px-5 hover:bg-secondary/10 hover:text-secondary cursor-pointer flex items-center gap-x-3"
        >
          <AiOutlineLogout size={18} />
          <p>Logout</p>
        </li>
      </ul>
    </m.div>
  );
};

export default UserMenu;
