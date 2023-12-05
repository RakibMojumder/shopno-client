import React from "react";
import { Th, Thead, Tr } from "react-super-responsive-table";

const OrderHeader = () => {
  return (
    <Thead>
      <Tr className="border bg-secondary text-white">
        <Th className="py-2">Image</Th>
        <Th className="py-2">Name</Th>
        <Th className="py-2">Price</Th>
        <Th className="py-2">Customer Email</Th>
        <Th className="py-2">TransactionID</Th>
      </Tr>
    </Thead>
  );
};

export default OrderHeader;
