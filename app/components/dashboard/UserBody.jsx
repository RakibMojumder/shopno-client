import React from "react";
import { Td, Tr } from "react-super-responsive-table";

const UserBody = ({ user }) => {
  return (
    <Tr>
      <Td className="text-center py-1">{user._id}</Td>
      <Td className="text-center py-1">{user.username}</Td>
      <Td className="text-center py-1">{user.email}</Td>
      <Td className="text-center py-1">{user.phone}</Td>
      <Td className="text-center py-1">{user.role}</Td>
    </Tr>
  );
};

export default UserBody;
