"use client";

import Loader from "@/app/components/Loaders/Loader";
import UserBody from "@/app/components/dashboard/UserBody";
import UserHeader from "@/app/components/dashboard/UserHeader";
import axios from "@/utils/axios.config";
import { useQuery } from "react-query";
import { Table, Tbody } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
      <Table className="space-y-0.5">
        {/* Header */}
        <UserHeader />
        {/* Body */}
        <Tbody className="bg-secondary/5">
          {data?.map((user, index) => (
            <UserBody key={user._id} index={index} user={user} />
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Admins;
