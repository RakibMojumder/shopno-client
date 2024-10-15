"use client";

import {
  useGetLoginUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/authApi";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useState } from "react";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Loader from "@/app/components/Loaders/Loader";
import toast from "react-hot-toast";
import isObjValueChanged from "@/utils/isObjValueChanged";

const UserProfile = () => {
  const userData = useGetLoginUserQuery(null);
  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateUserMutation();

  // store user default value
  const [defaultValue, setDefaultValue] = useState({
    username: userData?.data?.data?.username,
    email: userData?.data?.data?.email,
    phone: userData?.data?.data?.phone,
    country: userData?.data?.data?.country,
    address: userData?.data?.data?.address,
    city: userData?.data?.data?.city,
  });

  // store form data
  const [formData, setFormData] = useState({ ...defaultValue });

  // set input value
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = isObjValueChanged(defaultValue, formData);

    if (result) {
      return toast.error("Please update the information");
    }

    await updateUser({
      id: userData?.data?.data?._id,
      data: { ...formData },
    });
  };

  if (isSuccess) {
    toast.success("Profile updated successfully");
  }

  if (isError) {
    toast.error("Can not update profile");
  }

  if (userData?.isLoading) return <Loader />;

  return (
    <div className="min-h-screen">
      <Layout>
        <div className="grid grid-cols-12 items-start gap-x-20 mt-5">
          <div className="col-span-4 space-y-7">
            <div className="bg-white border py-5">
              <div className="w-full flex justify-center items-center py-6">
                <Image
                  alt="user image"
                  width={150}
                  height={150}
                  priority
                  src={userData?.data?.data?.image}
                />
              </div>
              <h1 className="text-3xl font-semibold text-center">
                {userData?.data?.data?.username}
              </h1>
              <p className="text-center">{userData?.data?.data?.email}</p>
            </div>
            <div className="p-5 bg-white border space-y-3">
              <div className="flex items-center space-x-5">
                <AiOutlineHeart size={24} />
                <h3 className="font-medium">
                  Wish List ({userData?.data?.data?.wishList.length})
                </h3>
              </div>
              <div className="flex items-center space-x-5">
                <LiaShoppingBagSolid size={24} />
                <h3 className="font-medium">
                  Cart List ({userData?.data?.data?.cardList.length})
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-8 bg-white p-6 border">
            <h3 className="text-2xl font-medium">Profile Details</h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-7">
              <div className="flex items-center space-x-10">
                <div className="w-full">
                  <label>Name</label>
                  <Input
                    required={true}
                    type="text"
                    name="username"
                    label="Your name"
                    className="w-full"
                    defaultValue={userData?.data?.data?.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label>Email</label>
                  <Input
                    required={true}
                    type="email"
                    name="email"
                    label="Your email"
                    className="w-full"
                    defaultValue={userData?.data?.data?.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <div className="w-full">
                  <label>Phone</label>
                  <Input
                    required={true}
                    type="text"
                    name="phone"
                    label="Your phone"
                    className="w-full"
                    defaultValue={userData?.data?.data?.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label>Country</label>
                  <Input
                    required={true}
                    type="text"
                    name="country"
                    label="Your country"
                    className="w-full"
                    defaultValue={userData?.data?.data?.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <div className="w-full">
                  <label>City</label>
                  <Input
                    required={true}
                    type="text"
                    name="city"
                    label="Your city"
                    className="w-full"
                    defaultValue={userData?.data?.data?.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label>Address</label>
                  <Input
                    required={true}
                    type="text"
                    name="address"
                    label="Your address"
                    className="w-full"
                    defaultValue={userData?.data?.data?.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button
                disabled={isLoading}
                type="submit"
                size="medium"
                variant="filled"
              >
                {isLoading ? "Updating..." : " Update Profile"}
              </Button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default UserProfile;
