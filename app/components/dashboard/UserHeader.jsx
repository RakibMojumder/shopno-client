import React from "react";
import { Th, Thead, Tr } from "react-super-responsive-table";

const UserHeader = () => {
  return (
    <Thead>
      <Tr className="border bg-primary text-white">
        <Th className="py-2 text-center">S.N.</Th>
        <Th className="py-2 text-left">Name</Th>
        <Th className="py-2 text-left">Email</Th>
        <Th className="py-2 text-left">Phone</Th>
        <Th className="py-2 text-left">Role</Th>
      </Tr>
    </Thead>
  );
};

export default UserHeader;
