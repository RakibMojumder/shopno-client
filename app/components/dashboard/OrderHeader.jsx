import React from "react";

const OrderHeader = () => {
  return (
    <div className="flex items-center text-center p-3 rounded-t-lg bg-secondary text-white divide-x">
      <div className="w-14 px-2 text-ellipsis overflow-hidden">Image</div>
      <div className="flex-1 px-2 text-ellipsis overflow-hidden">Name</div>
      <div className="flex-1 px-2 text-ellipsis overflow-hidden">Price</div>
      <div className="flex-1 px-2 text-ellipsis overflow-hidden">
        Customer Email
      </div>
      <div className="flex-1 px-2 text-ellipsis overflow-hidden">
        TransactionID
      </div>
    </div>
  );
};

export default OrderHeader;
