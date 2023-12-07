import React from "react";
import { Th, Thead, Tr } from "react-super-responsive-table";

const UserHeader = () => {
  return (
    <Thead>
      <Tr className="border bg-secondary text-white">
        <Th className="py-2">ID</Th>
        <Th className="py-2">Name</Th>
        <Th className="py-2">Email</Th>
        <Th className="py-2">Phone</Th>
        <Th className="py-2">Role</Th>
      </Tr>
    </Thead>
  );
};

export default UserHeader;
