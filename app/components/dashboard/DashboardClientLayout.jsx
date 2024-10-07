"use client";

import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const DashboardClientLayout = ({ children }) => {
  const [showDashboard, setShowDashboard] = useState(false);
  return (
    <div className="h-screen flex bg-neutral-100">
      <AnimatePresence>
        <Sidebar
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
        />
      </AnimatePresence>
      <div className="flex-1 shrink-0 h-screen overflow-auto">
        <DashboardNav
          setShowDashboard={setShowDashboard}
          showDashboard={showDashboard}
        />
        <div className="p-2 sm:p-5 pb-24">{children}</div>
      </div>
    </div>
  );
};

export default DashboardClientLayout;
