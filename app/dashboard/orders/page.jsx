import OrderBody from "@/app/components/dashboard/OrderBody";
import OrderHeader from "@/app/components/dashboard/OrderHeader";
import UserBody from "@/app/components/dashboard/UserBody";
import UserHeader from "@/app/components/dashboard/UserHeader";
import axios from "@/utils/axios.config";
import { format } from "date-fns";
import { cookies } from "next/headers";
import Image from "next/image";

const getOrders = async () => {
  const token = cookies().get("token").value;

  const res = await axios.get("/admin/get-orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
};

const Orders = async () => {
  const orders = await getOrders();
  console.log(orders);
  return (
    <>
      <div className="text-center mb-3">
        <h1 className="text-2xl font-semibold uppercase leading-none">
          Mangers
        </h1>
        <h3>List of Managers</h3>
      </div>
      <div className="space-y-8">
        {orders?.map((order) => (
          <div key={order._id}>
            <div className="flex gap-5 items-center mb-5">
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
              <p className="font-medium">{format(new Date(order._id), "PP")}</p>
              <div className="h-[1px] flex-1 bg-neutral-200"></div>
            </div>
            <OrderHeader />
            <div className="space-y-0.5">
              {order.orders.map((products) =>
                products.products.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center text-center p-2 bg-secondary/5"
                  >
                    <div className="w-14 px-2 text-ellipsis overflow-hidden">
                      <Image
                        alt="product image"
                        src={product.image}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex-1 px-2 text-ellipsis overflow-hidden">
                      {product.name}
                    </div>
                    <div className="flex-1 px-2 text-ellipsis overflow-hidden">
                      {product.price}
                    </div>
                    <div className="flex-1 px-2 text-ellipsis overflow-hidden">
                      {products.customerEmail}
                    </div>
                    <div className="flex-1 px-2 text-ellipsis overflow-hidden">
                      {products.transactionId}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
