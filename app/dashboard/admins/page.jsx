"use client";

import Loader from "@/app/components/Loaders/Loader";
import UserBody from "@/app/components/dashboard/UserBody";
import UserHeader from "@/app/components/dashboard/UserHeader";
import axios from "@/utils/axios.config";
import { useQuery } from "react-query";

const Admins = () => {
  const { data, isLoading } = useQuery(["admin"], async () => {
    const res = await axios.get("/admin/get-users?role=admin");
    return res.data.data;
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="text-2xl font-semibold uppercase leading-none">
          ADmins
        </h1>
        <h3>List of Admins</h3>
      </div>
      <div className="space-y-0.5">
        {/* Header */}
        <UserHeader />
        {/* Body */}
        <div>
          {data?.map((user) => (
            <UserBody key={user._id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Admins;
