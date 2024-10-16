"use client";

import { useGetLoginUserQuery } from "@/redux/api/authApi";
import Image from "next/image";
import userImage from "@/public/assets/user.png";
import { RxHamburgerMenu } from "react-icons/rx";

const DashboardNav = ({ setShowDashboard }) => {
  const { isLoading, data } = useGetLoginUserQuery();

  if (isLoading) return;

  return (
    <div className="h-16 bg-white sticky top-0 z-20 px-5 flex items-center justify-between xl:justify-end shadow">
      <div>
        <RxHamburgerMenu
          onClick={() => setShowDashboard(true)}
          size={27}
          className="cursor-pointer block md:hidden"
        />
      </div>
      <div className="flex items-center gap-x-3">
        <div className="text-end">
          <h3 className="leading-none">{data.data.username}</h3>
          <p className="text-sm">{data.data.email}</p>
        </div>
        <Image
          alt="admin image"
          src={data.data.image ? data.data.image : userImage}
          height={40}
          width={40}
          className="border rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardNav;
