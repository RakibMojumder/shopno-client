"use client";

import { usePathname } from "next/navigation";
import React from "react";

const DashboardLink = ({ label, href, icon: Icon, handleNavigate }) => {
  const pathname = usePathname();

  return (
    <button
      onClick={() => handleNavigate(href)}
      className={`py-2.5 flex items-center gap-4 font-medium pl-4 w-full ${
        href === pathname
          ? "bg-[#F2F1F5] text-primary rounded-l-full relative after:absolute before:absolute after:bottom-full after:right-0 after:h-12 after:w-12 after:bg-transparent after:rounded-full after:shadow-[35px_30px_0px_10px_#F2F1F5] after:pointer-events-none before:top-full before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-full before:shadow-[35px_-30px_0px_10px_#F2F1F5] before:pointer-events-none"
          : ""
      }`}
    >
      <Icon size={24} />
      {label}
    </button>
  );
};

export default DashboardLink;
