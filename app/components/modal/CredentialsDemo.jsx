"use client";

import useClickOutside from "@/hook/useClickOutside";
import { motion as m } from "framer-motion";
import { useRef } from "react";

const CredentialsDemo = ({ setSeeDemo }) => {
  const ref = useRef();
  useClickOutside(ref, () => setSeeDemo(false));

  return (
    <m.div
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="h-screen w-full bg-black/30 fixed top-0 left-0 z-40 flex justify-center items-center"
    >
      <m.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
        exit={{ y: 50, opacity: 0, transition: { duration: 0.2 } }}
        ref={ref}
        className="w-full sm:w-2/3 xl:w-1/3 h-72 bg-white rounded-md relative p-6 space-y-5"
      >
        <div>
          <h3 className="text-lg font-medium">Admin Credentials</h3>
          <div className="px-2 py-3 bg-neutral-50 border">
            <p>
              <span className="font-medium">Email:</span> rakib.ahmed@gmail.com
            </p>
            <p>
              <span className="font-medium">Password:</span> 123456
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium">User Credentials</h3>
          <div className="px-2 py-3 bg-neutral-50 border">
            <p>
              <span className="font-medium">Email:</span> rakib.ahmed@gmail.com
            </p>
            <p>
              <span className="font-medium">Password:</span> 123456
            </p>
          </div>
        </div>
      </m.div>
    </m.div>
  );
};

export default CredentialsDemo;
