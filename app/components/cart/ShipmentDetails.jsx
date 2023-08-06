"use client";

import Input from "../Input";

const ShipmentDetails = ({ setCurrentStep }) => {
  return (
    <div className="p-10">
      <form className="space-y-6">
        <Input
          type="text"
          name="name"
          defaultValue={"Hello"}
          label="Customer name"
          disabled
        />
        <Input
          type="text"
          name="email"
          defaultValue={"Hello"}
          label="Customer email"
          disabled
        />
      </form>
    </div>
  );
};

export default ShipmentDetails;
