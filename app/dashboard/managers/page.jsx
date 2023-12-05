"use client";

import Loader from "@/app/components/Loaders/Loader";
import UserBody from "@/app/components/dashboard/UserBody";
import UserHeader from "@/app/components/dashboard/UserHeader";
import axios from "@/utils/axios.config";
import { useQuery } from "react-query";
import { Table, Tbody } from "react-super-responsive-table";

const Managers = () => {
  const { data, isLoading } = useQuery(["manager"], async () => {
    const res = await axios.get("/admin/get-users?role=manager");
    return res.data.data;
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="text-2xl font-semibold uppercase leading-none">
          Mangers
        </h1>
        <h3>List of Managers</h3>
      </div>
      <Table className="space-y-0.5">
        {/* Header */}
        <UserHeader />
        {/* Body */}
        <Tbody className="bg-secondary/5">
          {data?.map((user) => (
            <UserBody key={user._id} user={user} />
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Managers;
