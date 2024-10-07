import React from "react";
import { Td, Tr } from "react-super-responsive-table";

const UserBody = ({ user, index }) => {
  return (
    <Tr className="bg-white">
      <Td className="py-3 border-b text-center w-[100px]">{index + 1}</Td>
      <Td className="py-3 border-b text-left">{user.username}</Td>
      <Td className="py-3 border-b text-left">{user.email}</Td>
      <Td className="py-3 border-b text-left">{user.phone}</Td>
      <Td className="py-3 border-b text-left">{user.role}</Td>
    </Tr>
  );
};

export default UserBody;
