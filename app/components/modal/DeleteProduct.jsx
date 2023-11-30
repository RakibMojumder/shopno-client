import useClickOutside from "@/hook/useClickOutside";
import { motion as m } from "framer-motion";
import Button from "../Button";
import { useRef } from "react";
import axios from "@/utils/axios.config";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const DeleteProduct = ({ product, setIsOpen, refetch }) => {
  const ref = useRef();
  const token = Cookies.get("token");
  useClickOutside(ref, () => setIsOpen(false));

  const handleDeleteProduct = async () => {
    const res = await axios.delete(`/admin/${product._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.success) {
      toast.success(res.data.message);
      refetch();
    } else {
      toast.error(res.data.error);
    }
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
        className="w-1/4 h-36 bg-white rounded-md relative"
      >
        <dir className="p-5 flex flex-col space-y-3 justify-center items-center text-center">
          <h3>Do you want to delete this product?</h3>
          <div className="flex items-center justify-around w-full">
            <Button
              handleClick={() => setIsOpen(false)}
              size={"small"}
              variant={"filled"}
            >
              Cancel
            </Button>
            <Button
              handleClick={handleDeleteProduct}
              size={"small"}
              variant={"outlined"}
            >
              Yes
            </Button>
          </div>
        </dir>
      </m.div>
    </m.div>
  );
};

export default DeleteProduct;
