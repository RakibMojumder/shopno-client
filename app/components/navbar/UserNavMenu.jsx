"use client";

import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import userImage from "@/public/assets/user.png";
import Image from "next/image";
import { useState, useRef } from "react";
import UserMenu from "../user/UserMenu";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Cart from "../cart/Cart";
import { setShowCart } from "@/redux/features/cartSlice";

const UserNavMenu = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="flex items-center gap-x-8">
      <Link href="/wish-list" className="relative">
        <AiOutlineHeart size={27} className="text-primary" />
        {user?.wishList?.length > 0 && (
          <span className="h-6 w-6 rounded-full bg-primary text-white flex justify-center items-center absolute -top-3 md:-top-4 -right-2 text-sm">
            {user.wishList.length}
          </span>
        )}
      </Link>

      <div
        onClick={() => dispatch(setShowCart(true))}
        className="relative cursor-pointer"
      >
        <LiaShoppingBagSolid size={27} className="text-primary" />
        {cart.length > 0 && (
          <span className="h-6 w-6 rounded-full bg-primary text-white flex justify-center items-center absolute -top-3 md:-top-4 -right-2 text-sm">
            {cart.length}
          </span>
        )}
      </div>

      {!user ? (
        <Button size="small" variant="outlined">
          <Link href="/auth/login">Login</Link>
        </Button>
      ) : (
        <div ref={ref}>
          <button onClick={() => setShowUserMenu((prev) => !prev)}>
            <Image
              src={userImage}
              alt="user image"
              height={40}
              width={40}
              className="h-9 w-9 rounded-full"
            />
          </button>

          <AnimatePresence>
            {showUserMenu && (
              <UserMenu target={ref} setShowUserMenu={setShowUserMenu} />
            )}
          </AnimatePresence>
        </div>
      )}
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </div>
  );
};

export default UserNavMenu;
