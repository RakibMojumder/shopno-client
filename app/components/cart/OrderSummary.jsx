"use client";

import { numberWithCommas } from "@/utils/numberWithCommas";
import Button from "../Button";
import { useRouter } from "next/navigation";

const OrderSummary = ({ total, totalWithComma }) => {
  const router = useRouter();

  return (
    <div className="w-full sm:w-[350px] h-[340px] p-4 border bg-white mx-auto">
      <h1 className="pb-0.5 border-b border-primary/20 text-xl font-semibold">
        Order Summery
      </h1>
      <h5 className="font-semibold my-2">Bill Details</h5>
      <div className="space-y-3 mb-8">
        <div className="flex justify-between font-medium">
          <p>Cart Sub Total:</p>
          <span>৳ {totalWithComma}</span>
        </div>
        <div className="flex justify-between font-medium">
          <p>Shipping Charge:</p>
          <span>৳ 150</span>
        </div>
        <div className="flex justify-between font-medium border-t">
          <p>Total Amount</p>
          <span>৳ {numberWithCommas(total + 150)}</span>
        </div>
      </div>
      <Button
        handleClick={() => router.push("/payment-timeline")}
        variant="filled"
        size="large"
        className="px-6 flex items-center justify-between gap-x-6"
      >
        Continue
        <span className="h-2 w-2 rounded-full bg-white"></span>
        <span className="text-lg font-semibold">
          ৳ {numberWithCommas(total + 150)}
        </span>
      </Button>
    </div>
  );
};

export default OrderSummary;
