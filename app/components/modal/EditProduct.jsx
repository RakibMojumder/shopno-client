import useClickOutside from "@/hook/useClickOutside";
import { motion as m } from "framer-motion";
import { useRef, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import TextArea from "../TextArea";
import { RxCross2 } from "react-icons/rx";
import FileInput from "../FileInput";
import Select from "../Select";
import { categories } from "@/utils/data";
import axios from "@/utils/axios.config";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const EditProduct = ({ product, setEditProduct, refetch }) => {
  const ref = useRef();
  const token = Cookies.get("token");
  const [image, setImage] = useState();
  const [processing, setProcessing] = useState(false);
  const [category, setCategory] = useState(product.category);
  useClickOutside(ref, () => setEditProduct(false));
  const [productData, setProductData] = useState({
    name: product.name,
    price: product.price,
    discountPrice: product.discountPrice,
    description: product.description,
  });

  const handleOnChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    setProcessing(true);

    let res;
    if (image) {
      res = await axios.post(
        "/admin/image-upload",
        { data: image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    let data = { ...productData, category };
    if (res) {
      data = { ...data, image: res?.data?.imageSrc };
    }

    const response = await axios.put(
      `/admin/update-product/${product._id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      setEditProduct(false);
      refetch();
      setProcessing(false);
    }
    setProcessing(false);
  };

  return (
    <m.div
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="h-screen w-full bg-black/30 fixed top-0 left-0 z-40 flex justify-center items-center"
    >
      <m.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
        exit={{ y: 50, opacity: 0, transition: { duration: 0.2 } }}
        ref={ref}
        className="w-full sm:w-2/3 xl:w-1/3 h-[calc(100vh_-_150px)] bg-white rounded-md relative px-6 sm:px-0"
      >
        <div className="h-full w-full p-5 custom-scroll overflow-y-auto">
          <h3 className="text-xl font-semibold text-center mb-8">
            Edit Product
          </h3>
          <form onSubmit={handleEditProduct} className="space-y-5">
            <Input
              type="text"
              name="name"
              label="Product Name"
              defaultValue={product.name}
              onChange={(e) => handleOnChange(e)}
            />
            <Input
              type="number"
              name="price"
              label="Product Price"
              defaultValue={product.price}
              onChange={(e) => handleOnChange(e)}
            />
            <Input
              type="number"
              name="discountPrice"
              label="Discount Price"
              defaultValue={product.discountPrice}
              onChange={(e) => handleOnChange(e)}
            />

            <Select
              label="Category"
              options={categories}
              value={category}
              setValue={setCategory}
            />
            <TextArea
              label="Description"
              name="description"
              defaultValue={product.description}
              onChange={(e) => handleOnChange(e)}
            />
            <FileInput src={product.image} setValue={setImage} />
            <Button size="large" variant="filled">
              {processing ? "Processing..." : "Submit"}
            </Button>
          </form>
          <span
            onClick={() => setEditProduct(false)}
            className="absolute -top-5 -right-2 h-9 w-9 bg-[#ECE3F9] rounded-full flex justify-center items-center"
          >
            <RxCross2 size={26} className="text-secondary" />
          </span>
        </div>
      </m.div>
    </m.div>
  );
};

export default EditProduct;
