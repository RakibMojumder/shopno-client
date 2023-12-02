"use client";

import useClickOutside from "@/hook/useClickOutside";
import { categories } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const NavItems = () => {
  const ref = useRef();
  const router = useRouter();
  const [show, setShow] = useState(false);
  useClickOutside(ref, () => setShow(false));

  const handleClick = (category) => {
    setShow(false);
    router.push(`/product/category/${category}`);
  };

  return (
    <div className="relative font-medium hidden xl:block">
      <div ref={ref}>
        <div
          onClick={() => setShow((prev) => !prev)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <span>Categories</span>
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
          <div className="w-[550px] absolute top-20 lg:top-10 -right-14 lg:-right-10 grid grid-cols-2 rounded-md bg-white shadow-[0px_0px_8px_#ddd] gap-3 p-4 z-50">
            {categories.map((category) => (
              <div
                onClick={() => handleClick(category.name)}
                key={category.id}
                className="w-full bg-gray-100 rounded py-2 lg:py-4 pl-4 flex items-center gap-x-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={category.img}
                  height={30}
                  width={30}
                  alt="category image"
                />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
