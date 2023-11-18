import Image from "next/image";
import logo from "../../public/assets/logo.png";

const getOrderProduct = async (transactionId) => {
  const res = await fetch(
    `${process.env.SERVER_URL}/order?transactionId=${transactionId}`
  );
  const data = await res.json();
  return data.data;
};

const PaymentSuccess = async ({ searchParams }) => {
  const order = await getOrderProduct(searchParams.transactionId);
  const totalAmount = order?.products.reduce(
    (acc, product) => (acc += product.quantity * product.price),
    0
  );

  return (
    <div className="min-h-screen w-1/2 mx-auto my-10 bg-white p-5">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="logo image" height={200} width={200} />
        <h3 className="bg-green-500 text-white text-2xl uppercase p-2">Paid</h3>
      </div>
      <div className="my-7">
        <h2 className="text-lg">Customer Info:</h2>
        <div className="flex justify-between text-sm">
          <div>
            <h3>
              Name:{" "}
              <span className="font-medium">{order?.customerInfo.name}</span>
            </h3>
            <h3>
              Email:{" "}
              <span className="font-medium">{order?.customerInfo.email}</span>
            </h3>
            <h3>
              Phone:{" "}
              <span className="font-medium">{order?.customerInfo?.phone}</span>
            </h3>
            <h3>
              {order?.customerInfo?.division},{order?.customerInfo.district}
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
            {order?.products.map((product) => (
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
    // <div className="min-h-screen flex justify-center items-center">
    //   <div className="w-1/3 h-[230px] relative">
    //     <div className="w-[90%] h-full mx-auto flex flex-col justify-between py-7 bg-gradient-to-tr from-secondary via-secondary/80 to-secondary text-white rounded-xl text-center">
    //       <div>
    //         <h1 className="text-4xl font-semibold">Congratulation !</h1>
    //         <h3>You successfully Buy the product</h3>
    //       </div>
    //       <div>
    //         <h4>Amount Paid: 2000</h4>
    //         <h5>Your transaction ID: {searchParams.transactionId}</h5>
    //       </div>
    //     </div>
    //     <div className="w-full flex justify-between items-center absolute top-1/2 -translate-y-1/2">
    //       <div className="h-9 w-9 bg-[#F6F6F6] rounded-full"></div>
    //       <div className="h-[1px] flex-1 border-2 border-dashed border-neutral-300"></div>
    //       <div className="h-9 w-9 bg-[#F6F6F6] rounded-full"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PaymentSuccess;
