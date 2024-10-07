import React from "react";
import { Th, Thead, Tr } from "react-super-responsive-table";

const OrderHeader = () => {
  return (
    <Thead>
      <Tr className="border bg-primary text-white">
        <Th className="py-3 w-[100px]">Image</Th>
        <Th className="py-3 text-left lg:w-[400px]">Name</Th>
        <Th className="py-3 text-left">Customer Email</Th>
        <Th className="py-3 text-left">Quantity</Th>
        <Th className="py-3 text-left">Price</Th>
      </Tr>
    </Thead>
  );
};

export default OrderHeader;
