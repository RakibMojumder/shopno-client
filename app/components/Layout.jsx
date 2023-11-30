import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-[97%] md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto">
      {children}
    </div>
  );
};

export default Layout;
