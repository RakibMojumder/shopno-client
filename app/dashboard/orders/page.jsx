"use client";

import OrderBody from "@/app/components/dashboard/OrderBody";
import OrderHeader from "@/app/components/dashboard/OrderHeader";
import axios from "@/utils/axios.config";
import { format } from "date-fns";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { Table, Tbody } from "react-super-responsive-table";

const Orders = () => {
  const token = Cookies.get("token");
  const { data } = useQuery(["orders"], async () => {
    const res = await axios.get("/admin/get-orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  });

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="text-2xl font-semibold uppercase leading-none">
          Orders
        </h1>
        <h3>List of Orders</h3>
      </div>
      <div className="space-y-8">
        {data?.map((order) => (
          <div key={order._id}>
            <div className="flex gap-5 items-center mb-5">
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
              <p className="font-medium">{format(new Date(order._id), "PP")}</p>
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
            </div>
            <Table>
              <OrderHeader />
              <Tbody className="space-y-0.5 bg-primary/5">
                {order.orders.map((products) =>
                  products.products.map((product) => (
                    <OrderBody
                      key={product._id}
                      product={product}
                      email={products.customerEmail}
                    />
                  ))
                )}
              </Tbody>
            </Table>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
