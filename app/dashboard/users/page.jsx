"use client";

import Loader from "@/app/components/Loaders/Loader";
import UserBody from "@/app/components/dashboard/UserBody";
import { useQuery } from "react-query";
import axios from "@/utils/axios.config";
import UserHeader from "@/app/components/dashboard/UserHeader";
import { Table, Tbody } from "react-super-responsive-table";

const Users = () => {
  const { data, isLoading } = useQuery(["users"], async () => {
    const res = await axios.get("/admin/get-users?role=user");
    return res.data.data;
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="text-2xl font-semibold uppercase leading-none">Users</h1>
        <h3>List of Users</h3>
      </div>
      <Table>
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

export default Users;
