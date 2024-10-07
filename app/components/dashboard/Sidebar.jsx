"use client";

import Image from "next/image";
import DashLogo from "../../../public/assets/logo.png";
import DashboardLink from "./DashboardLink";
import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { motion as m } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence } from "framer-motion";

const Sidebar = ({ showDashboard, setShowDashboard }) => {
  const router = useRouter();
  const isMobile = useMediaQuery({
    query: "(max-width: 620px)",
  });

  const handleNavigate = (href) => {
    setShowDashboard(false);
    router.push(`${href}`);
  };

  return (
    <AnimatePresence>
      <m.div
        key={"sidebar"}
        initial={{ x: isMobile ? "-100%" : 0 }}
        whileInView={{ x: 0, transition: { duration: 0.5 } }}
        exit={{ x: isMobile ? "100%" : 0, transition: { duration: 0.5 } }}
        className={`w-full sm:w-[280px] md:w-[240px] bg-white p-3 pr-0 shadow-[0px_5px_15px_#ddd] overflow-y-auto ${
          showDashboard
            ? "fixed top-0 left-0 h-full z-50 md:static"
            : "hidden md:block relative z-50"
        }`}
      >
        <div className="flex items-center justify-between pr-2">
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-x-3 cursor-pointer"
          >
            <Image
              src={DashLogo}
              alt="logo"
              height={64}
              width={200}
              className="h-8 md:h-10 w-40"
            />
          </div>
          <FaAngleLeft
            size={24}
            className="cursor-pointer block md:hidden"
            onClick={() => setShowDashboard(false)}
          />
        </div>
        <ul className="mt-8 space-y-1 pl-2 pr-3">
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
    </AnimatePresence>
  );
};

export default Sidebar;
