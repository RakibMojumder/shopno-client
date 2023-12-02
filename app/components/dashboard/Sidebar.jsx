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
    <div className="w-[240px] bg-secondary text-white p-3 pr-0 overflow-x-hidden">
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
        <DashboardLink
          label={"Orders"}
          href={"/dashboard/orders"}
          icon={FaCartShopping}
        />
        {/* <DashboardLink
          label={"Delivered"}
          href={"/dashboard/delivered"}
          icon={TbTruckDelivery}
        /> */}
      </ul>
    </div>
  );
};

export default Sidebar;
