"use client";
import Layout from "@/app/components/Layout";
import axios from "@/utils/axios.config";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import Image from "next/image";
import { numberWithCommas } from "@/utils/numberWithCommas";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { useQuery } from "react-query";
import Loader from "@/app/components/Loaders/Loader";

const Orders = () => {
  const { user } = useSelector((state) => state.user);
  const { isLoading, data } = useQuery(["orders", user?.email], async () => {
    const res = await axios.get(`/order/user?email=${user?.email}`);
    return res.data.data;
  });

  if (isLoading) return <Loader />;

  return (
    <Layout>
      <div className="min-h-screen">
        <h3 className="text-2xl text-center font-semibold my-5">
          Order History
        </h3>
        {data.map((order) => (
          <div key={order._id} className="mt-10">
            <div className="flex gap-5 items-center mb-5">
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
              <p className="font-medium">{format(new Date(order._id), "PP")}</p>
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
            </div>
            <div>
              <Table>
                <Thead className="border bg-primary text-white">
                  <Tr>
                    <Th className="py-2">Product</Th>
                    <Th className="py-2">Price</Th>
                    <Th className="py-2">Quantity</Th>
                    <Th className="py-2">Total Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {order.orders.map((products) =>
                    products.map((product) => (
                      <Tr key={product._id} className="bg-white">
                        <Td className="py-1 pl-3 flex items-center text-lg font-medium gap-x-5">
                          <Image
                            src={product.image}
                            alt="product image"
                            height={80}
                            width={100}
                            className="h-10 w-10"
                          />
                          <h3 className="leading-none font-normal">
                            {product.name}
                          </h3>
                        </Td>
                        <Td className="text-center">{product.price}</Td>
                        <Td className="text-center">{product.quantity}</Td>
                        <Td className="text-center">
                          ৳ {numberWithCommas(product.quantity * product.price)}
                        </Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
              </Table>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Orders;
