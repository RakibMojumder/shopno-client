"use client";

import { useSelector } from "react-redux";
import Button from "../Button";
import Input from "../Input";
import { motion as m } from "framer-motion";
import Select from "../Select";
import { useEffect, useState } from "react";
import axios from "@/utils/axios.config";
import scrollTop from "@/utils/scrollTop";

const ShipmentDetails = ({
  setCurrentStep,
  division,
  district,
  address,
  postCode,
  setDivision,
  setDistrict,
  setAddress,
  setPostCode,
}) => {
  const { user } = useSelector((state) => state.user);
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDivisions = async () => {
      const res = await axios.get("/product/divisions");
      setDivisions(res.data.data);
    };

    getDivisions();
  }, []);

  useEffect(() => {
    if (division) {
      const getDistricts = async () => {
        const res = await axios.get(`/product/districts?division=${division}`);
        setDistricts(res.data.data);
      };

      getDistricts();
    }
  }, [division]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!division || !district || !address) {
      return setError("All field are required");
    }

    setError("");
    setCurrentStep(2);
    scrollTop();
  };

  return (
    <m.div
      key={"details"}
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
    >
      {error && (
        <div className="py-5 mb-7 bg-red-100/50 flex justify-center items-center relative after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:bg-red-400">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      <h1 className="text-lg font-semibold mb-5">Shipment Details</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          name="name"
          defaultValue={user?.username}
          label="Customer name"
          disabled
        />
        <Input
          type="text"
          name="email"
          defaultValue={user?.email}
          label="Customer email"
          disabled
        />

        <Select
          options={divisions}
          value={division}
          setValue={setDivision}
          label="Division"
        />

        {division && (
          <>
            <Select
              options={districts}
              value={district}
              setValue={setDistrict}
              label="Districts"
            />

            <Input
              type="text"
              name="address"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              type="text"
              name="postCode"
              label="Post Code"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </>
        )}

        <Button type="submit" size="large" variant="filled">
          Proceed
        </Button>
      </form>
    </m.div>
  );
};

export default ShipmentDetails;
