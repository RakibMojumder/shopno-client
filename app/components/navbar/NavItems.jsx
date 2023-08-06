"use client";

import { navItems } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const NavItems = () => {
  const ref = useRef();
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleClick = (category) => {
    setShow(false);
    console.log(category);
    router.push(`/product/category/${category}`);
  };

  return (
    <div className="flex items-center justify-around relative flex-1 font-medium">
      {navItems.map((navItem) =>
        navItem?.subCate ? (
          <div key={navItem.id} ref={ref}>
            <div
              onClick={() => setShow((prev) => !prev)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span>{navItem.label}</span>
              <BiChevronDown
                size={24}
                className={`duration-300 ${show ? "rotate-180" : "rotate-0"}`}
              />
            </div>

            <div
              className={`duration-200 origin-center ${
                show
                  ? "visible -translate-y-6 opacity-100"
                  : "invisible translate-y-3 opacity-0"
              }`}
            >
              <div className="w-[550px] absolute top-10 -left-44 grid grid-cols-2 rounded-md bg-white shadow-[0px_0px_8px_#ddd] gap-3 p-4">
                {navItem.subCate.map((item) => (
                  <div
                    onClick={() => handleClick(item.label)}
                    key={item.id}
                    className="w-full bg-gray-100 rounded py-4 pl-4 flex items-center gap-x-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src={item.img}
                      height={30}
                      width={30}
                      alt="category image"
                    />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link key={navItem.id} href={"/"}>
            {navItem.label}
          </Link>
        )
      )}
    </div>
  );
};

export default NavItems;
