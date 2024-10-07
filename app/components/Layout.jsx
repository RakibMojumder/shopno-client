import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-[95%] lg:w-[90%] xl:w-[87%] max-w-[1420px] mx-auto">
      {children}
    </div>
  );
};

export default Layout;
