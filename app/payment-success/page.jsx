"use client";

import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "@/utils/axios.config";
import Cookies from "js-cookie";

const PaymentSuccess = ({ searchParams }) => {
  const router = useRouter();
  const [order, setOrder] = useState({});
  const totalAmount = order?.products?.reduce(
    (acc, product) => (acc += product.quantity * product.price),
    0
  );

  useEffect(() => {
    Cookies.remove("cart");
    const getOrderProduct = async () => {
      const res = await axios.get(
        `/order?transactionId=${searchParams.transactionId}`
      );
      setOrder(res.data.data);
    };
    getOrderProduct();
  }, [searchParams.transactionId]);

  return (
    <div className="min-h-screen w-1/2 mx-auto my-10">
      <div className="bg-white p-5">
        <div className="flex justify-between items-center">
          <Image src={logo} alt="logo image" height={200} width={200} />
          <h3 className="bg-green-500 text-white text-2xl uppercase p-2">
            Paid
          </h3>
        </div>
        <div className="my-7">
          <h2 className="text-lg">Customer Info:</h2>
          <div className="flex justify-between text-sm">
            <div>
              <h3>
                Name:{" "}
                <span className="font-medium">{order?.customerInfo?.name}</span>
              </h3>
              <h3>
                Email:{" "}
                <span className="font-medium">
                  {order?.customerInfo?.email}
                </span>
              </h3>
              <h3>
                Phone:{" "}
                <span className="font-medium">
                  {order?.customerInfo?.phone}
                </span>
              </h3>
              <h3>
                {order?.customerInfo?.division},{order?.customerInfo?.district}
              </h3>
            </div>
            <div className="text-center">
              <span className="font-medium">TransactionId:</span>{" "}
              {searchParams.transactionId}
            </div>
          </div>
        </div>
        <div>
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                  Product
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                  Quantity
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-base">
                  TotalPrice
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {order?.products?.map((product) => (
                <tr key={product._id}>
                  <td className="whitespace-nowrap flex items-center text-lg font-medium gap-x-5">
                    <Image
                      alt="product image"
                      src={product.image}
                      height={50}
                      width={50}
                      className="h-12"
                    />
                    <h3 className="text-base">
                      {product.name.slice(0, 15) + "..."}
                    </h3>
                  </td>
                  <td className="whitespace-nowrap px-4 text-center font-semibold">
                    {product.price}
                  </td>
                  <td className="px-10 text-center">{product.quantity}</td>
                  <td className="whitespace-nowrap px-4 text-center font-semibold">
                    {product.quantity * product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end mt-5 border-t pt-3">
            <h3>
              SubTotal: <span className="font-medium">৳{totalAmount}</span>
            </h3>
            <h3>
              Shipping Charge: <span className="font-medium">৳150</span>
            </h3>
            <h3>
              Discount: <span className="font-medium">৳0</span>
            </h3>
            <h3>
              Total: <span className="font-medium">৳{totalAmount + 150}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <Button
          handleClick={() => router.push("/")}
          variant={"filled"}
          size={"medium"}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
