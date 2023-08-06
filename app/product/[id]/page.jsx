"use client";

import Layout from "@/app/components/Layout";
import Loader from "@/app/components/Loader";
import ProductCount from "@/app/components/product/ProductCount";
import { useGetProductQuery } from "@/redux/api/productApi";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";
import StarComponent from "@/app/components/StarComponent";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch } from "react-redux";
import { useAddToWishListMutation } from "@/redux/api/authApi";
import { toast } from "react-hot-toast";
import useIsWishListProduct from "@/hook/useIsWishListProduct";
import { useParams } from "next/navigation";
import { addToCart } from "@/redux/features/cartSlice";

const ProductDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(1);
  const { isLoading, data } = useGetProductQuery(params.id);
  const [addToList, response] = useAddToWishListMutation();
  const isExist = useIsWishListProduct(params.id);

  useEffect(() => {
    if (response?.isLoading) {
      return;
    }

    if (response?.isError) {
      toast.error("could not add to wish list");
    }
  }, [response]);

  const handleWishList = async (id) => {
    try {
      addToList(id);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Layout>
      <div className="w-3/4 mx-auto pt-10 pb-20">
        <div className="grid grid-cols-12 gap-10 bg-white px-10 py-8">
          <div className="col-span-6">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "product image",
                  isFluidWidth: true,
                  src: data.data.image,
                },
                largeImage: {
                  src: data.data.image,
                  width: 600,
                  height: 800,
                  enlargedImagePosition: "over",
                },
              }}
            />
          </div>
          <div className="col-span-6">
            <div className="flex items-center gap-x-2 mb-5">
              Category
              <span>
                <FiChevronRight />
              </span>
              <span className="text-primary">{data.data.category}</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl leading-none text-black">
                {data.data.name}
              </h1>
              <div className="flex gap-x-2">
                <StarComponent star={data.data.rating} />
                <span className="text-sm">{data.data.totalRating} Ratings</span>
              </div>
              <div className="flex space-x-2">
                <p className="text-3xl text-primary">৳ {data.data.price}</p>
                <del>{data.data?.discountPrice}</del>
              </div>
            </div>

            <div className="mt-14 space-y-8">
              <ProductCount
                productCount={productCount}
                setProductCount={setProductCount}
              />

              <div className="flex items-center gap-x-5">
                <Button
                  handleClick={() => handleWishList(data.data._id)}
                  size="small"
                  variant="outlined"
                  className="px-3"
                >
                  {isExist ? (
                    <AiFillHeart size={27} />
                  ) : (
                    <AiOutlineHeart size={27} />
                  )}
                </Button>
                <Button
                  handleClick={() =>
                    dispatch(
                      addToCart({ ...data.data, quantity: productCount })
                    )
                  }
                  size="medium"
                  variant="filled"
                  className="block"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
