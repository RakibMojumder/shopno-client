import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import ViewProduct from "../modal/ViewProduct";
import { motion as m } from "framer-motion";
import { useState } from "react";
import EditProduct from "../modal/EditProduct";
import DeleteProduct from "../modal/DeleteProduct";
import { numberWithCommas } from "@/utils/numberWithCommas";

const AdminProduct = ({ product, showMenuId, handleShowMenuId, refetch }) => {
  const [viewProduct, setViewProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      key={product._id}
      className="h-[320px] cursor-pointer bg-white shadow relative overflow-hidden group"
    >
      <Image
        src={product.image}
        alt="product image"
        width={206}
        height={208}
        className="w-full h-48"
      />
      <div className="p-3">
        <div className="font-medium group-hover:text-primary h-16">
          <h3 className="group-hover:underline leading-none">
            {product.name.length > 50
              ? product.name.slice(0, 45) + "..."
              : product.name}
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex">
            <p className="font-semibold text-primary text-xl">
              ৳ {numberWithCommas(product.price)}
            </p>
            <del className="text-sm ml-1">
              {numberWithCommas(
                product.discountPrice ? product.discountPrice : 0
              )}
            </del>
          </div>
          <div className="relative">
            <HiOutlineDotsVertical
              onClick={() => handleShowMenuId(product._id)}
              size={24}
            />

            <AnimatePresence>
              {showMenuId == product._id && (
                <m.div
                  initial={{ height: 0, padding: 0 }}
                  animate={{
                    height: "120px",
                    padding: "12px 8px",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  exit={{
                    height: 0,
                    padding: 0,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-[#ECE3F9] text-secondary rounded-full absolute bottom-10 right-0 w-10 flex flex-col justify-between items-center"
                >
                  <FaEye
                    onClick={() => setViewProduct(true)}
                    size={24}
                    title="view"
                  />
                  <MdEdit
                    onClick={() => setEditProduct(true)}
                    size={24}
                    title="Edit"
                  />
                  <MdDeleteOutline
                    onClick={() => setIsOpen(true)}
                    size={24}
                    title="Delete"
                  />
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {viewProduct && (
            <ViewProduct product={product} setViewProduct={setViewProduct} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {editProduct && (
            <EditProduct
              refetch={refetch}
              product={product}
              setEditProduct={setEditProduct}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <DeleteProduct
              refetch={refetch}
              product={product}
              setIsOpen={setIsOpen}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminProduct;
