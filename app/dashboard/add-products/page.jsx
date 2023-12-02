"use client";

import Button from "@/app/components/Button";
import FileInput from "@/app/components/FileInput";
import Input from "@/app/components/Input";
import Select from "@/app/components/Select";
import TextArea from "@/app/components/TextArea";
import { categories } from "@/utils/data";
import React, { useState } from "react";
import axios from "@/utils/axios.config";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import imagePreview from "../../../public/assets/image-preview.png";
import { useSelector } from "react-redux";

const AddProducts = () => {
  const token = Cookies.get("token");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [processing, setProcessing] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    disCountPrice: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      return toast.success("Category is needed");
    }

    if (!image) {
      return toast.success("Image is needed");
    }

    setProcessing(true);
    const res = await axios.post(
      "/admin/image-upload",
      { data: image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.imageSrc) {
      const data = { ...productData, category, image: res.data.imageSrc };
      const response = await axios.post("/admin/add-product", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setProcessing(false);
        window.location.reload();
      } else {
        toast.error(response.data.error);
      }
    }

    setProcessing(false);
  };

  return (
    <div className="lg:w-2/3 xl:w-1/2 mx-auto">
      <h3 className="text-xl font-semibold uppercase my-5 text-center">
        Add Product
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          type="text"
          name="name"
          required={true}
          label="Product Name *"
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, [e.target.name]: e.target.value })
          }
        />

        <div className="flex flex-col sm:flex-row items-center gap-y-5 sm:gap-x-5">
          <Input
            type="number"
            name="price"
            required={true}
            label="Product Price *"
            value={productData.price}
            onChange={(e) =>
              setProductData({
                ...productData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <Input
            type="number"
            name="discountPrice"
            label="Discount Price"
            value={productData.disCountPrice}
            onChange={(e) =>
              setProductData({
                ...productData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <Select
          label="Category *"
          options={categories}
          value={category}
          setValue={setCategory}
        />
        <TextArea
          label="Description"
          name="description"
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, [e.target.name]: e.target.value })
          }
        />
        <FileInput src={imagePreview} setValue={setImage} />
        <Button size="large" variant="filled">
          {processing ? "Processing..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default AddProducts;
