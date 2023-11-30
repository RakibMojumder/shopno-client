"use client";
import Layout from "@/app/components/Layout";
import axios from "@/utils/axios.config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import Image from "next/image";
import { numberWithCommas } from "@/utils/numberWithCommas";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get(`/order/user?email=${user?.email}`);
      setOrders(res.data.data);
    };

    getOrders();
  }, [user?.email]);

  return (
    <Layout>
      <div className="min-h-screen">
        <h3 className="text-2xl text-center font-semibold my-5">
          Order History
        </h3>
        {orders.map((order) => (
          <div key={order._id}>
            <div className="flex gap-5 items-center mb-5">
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
              <p className="font-medium">{format(new Date(order._id), "PP")}</p>
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
            </div>
            <div>
              <table className="w-full space-x-10 border-separate border-spacing-y-1 pb-10">
                <thead className="border bg-secondary/75 text-white">
                  <tr>
                    <th className="font-semibold border-b border-primary/20 py-3">
                      Product
                    </th>
                    <th className="font-semibold border-b border-primary/20 py-3">
                      Price
                    </th>
                    <th className="font-semibold border-b border-primary/20 py-3">
                      Quantity
                    </th>
                    <th className="font-semibold border-b border-primary/20 py-3">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-10">
                  {order?.orders?.map((products) =>
                    products.map((product) => (
                      <tr key={product._id} className="bg-secondary/5">
                        <td className="border-b py-1 pl-3 flex items-center text-lg font-medium gap-x-5">
                          <Image
                            src={product.image}
                            alt="product image"
                            height={80}
                            width={100}
                            className="h-10 w-10"
                          />
                          <h3 className="leading-none font-normal">
                            {product.name.slice(0, 30)}
                          </h3>
                        </td>
                        <td className="border-b py-1 px-10 text-center font-semibold">
                          ৳{product.price}
                        </td>
                        <td className="border-b py-1 px-10 text-center font-semibold">
                          {product.quantity}
                        </td>
                        <td className="border-b py-1 text-center font-semibold">
                          ৳ {numberWithCommas(product.quantity * product.price)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Orders;
