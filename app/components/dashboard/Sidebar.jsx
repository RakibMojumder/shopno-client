"use client";

import Image from "next/image";
import DashLogo from "../../../public/assets/dash-logo.png";
import DashboardLink from "./DashboardLink";
import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[220px] bg-secondary text-white p-3 pr-0 overflow-x-hidden">
      <Link href={"/"} className="flex items-center gap-x-3 mt-5">
        <Image src={DashLogo} alt="logo" height={60} width={60} />
        <div className="uppercase">
          <h3 className="text-2xl leading-none font-semibold">Shopno</h3>
          <p className="text-[11px]">Make you happy</p>
        </div>
      </Link>
      <ul className="mt-8 pl-2 space-y-1">
        <DashboardLink
          label={"Dashboard"}
          href="/dashboard"
          icon={MdOutlineDashboard}
        />
        <DashboardLink
          label={"Admins"}
          href={"/dashboard/admins"}
          icon={RiAdminFill}
        />
        <DashboardLink
          label={"Managers"}
          href={"/dashboard/managers"}
          icon={MdManageAccounts}
        />
        <DashboardLink
          label={"Users"}
          href={"/dashboard/users"}
          icon={FaUsers}
        />
        <DashboardLink
          label={"Products"}
          href={"/dashboard/products"}
          icon={MdManageAccounts}
        />
        <DashboardLink
          label={"Add Products"}
          href={"/dashboard/add-products"}
          icon={IoIosAddCircle}
        />
        {/* <li className="py-2 pl-5 bg-white text-primary rounded-l-full relative after:absolute before:absolute after:bottom-full after:right-0 after:h-12 after:w-12 after:bg-transparent after:rounded-full after:shadow-[35px_30px_0px_10px_#fff] after:pointer-events-none before:top-full before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-full before:shadow-[35px_-30px_0px_10px_#fff] before:pointer-events-none">
          Home
        </li> */}
        <DashboardLink
          label={"Orders"}
          href={"/dashboard/orders"}
          icon={FaCartShopping}
        />
        <DashboardLink
          label={"Delivered"}
          href={"/dashboard/delivered"}
          icon={TbTruckDelivery}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
