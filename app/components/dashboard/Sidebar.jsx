"use client";

import Image from "next/image";
import DashLogo from "../../../public/assets/dash-logo.png";
import DashboardLink from "./DashboardLink";
import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { motion as m } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Sidebar = ({ showDashboard, setShowDashboard }) => {
  const router = useRouter();

  const handleNavigate = (href) => {
    setShowDashboard(false);
    router.push(`http://localhost:3000/${href}`);
  };

  return (
    <m.div
      key={"sidebar"}
      initial={{ x: "-100%" }}
      whileInView={{ x: 0, transition: { duration: 0.5 } }}
      className={`w-full sm:w-[240px] bg-secondary text-white p-3 pr-0 overflow-x-hidden overflow-y-auto ${
        showDashboard
          ? "fixed top-0 left-0 h-full z-50 md:static"
          : "hidden md:block"
      }`}
    >
      <div className="flex items-center justify-between pr-2">
        <div className="flex items-center gap-x-3">
          <Image
            src={DashLogo}
            alt="logo"
            height={60}
            width={60}
            className="h-8 w-10 md:h-12 md:w-14"
          />
          <div className="uppercase">
            <h3 className="text-xl md:text-2xl leading-none font-semibold">
              Shopno
            </h3>
            <p className="text-[9px] md:text-[11px]">Make you happy</p>
          </div>
        </div>
        <FaAngleLeft
          size={24}
          className="cursor-pointer block md:hidden"
          onClick={() => setShowDashboard(false)}
        />
      </div>
      <ul className="mt-8 pl-2 space-y-1">
        <DashboardLink
          label={"Dashboard"}
          href={"/dashboard"}
          icon={MdOutlineDashboard}
          handleNavigate={handleNavigate}
        />
        <DashboardLink
          label={"Admins"}
          href={"/dashboard/admins"}
          icon={RiAdminFill}
          handleNavigate={handleNavigate}
        />
        <DashboardLink
          label={"Managers"}
          href={"/dashboard/managers"}
          icon={MdManageAccounts}
          handleNavigate={handleNavigate}
        />
        <DashboardLink
          label={"Users"}
          href={"/dashboard/users"}
          icon={FaUsers}
          handleNavigate={handleNavigate}
        />
        <DashboardLink
          label={"Products"}
          href={"/dashboard/products"}
          icon={MdManageAccounts}
          handleNavigate={handleNavigate}
        />
        <DashboardLink
          label={"Add Products"}
          href={"/dashboard/add-products"}
          icon={IoIosAddCircle}
          handleNavigate={handleNavigate}
        />
        <DashboardLink
          label={"Orders"}
          href={"/dashboard/orders"}
          icon={FaCartShopping}
          handleNavigate={handleNavigate}
        />
        {/* <DashboardLink
          label={"Delivered"}
          href={"/dashboard/delivered"}
          icon={TbTruckDelivery}
        /> */}
      </ul>
    </m.div>
  );
};

export default Sidebar;
