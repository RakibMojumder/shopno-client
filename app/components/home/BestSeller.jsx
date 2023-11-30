"use client";

import Product from "../product/Product";
import Layout from "../Layout";
import { useQuery } from "react-query";
import axios from "@/utils/axios.config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Skelton from "../Skelton";
import { useDispatch } from "react-redux";
import { setSearchValue } from "@/redux/features/productSlice";

const BestSeller = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery("products", async () => {
    dispatch(setSearchValue(""));
    const res = await axios.get("/product/best-seller");
    return res.data.data;
  });

  return (
    <Layout>
      <div className="pt-20 pb-28">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold my-5 text-black">
            Best Seller
          </h3>
          <div className="flex items-center gap-x-6">
            <button className="best-seller-prev h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowLeftLong size={24} color="#7C3AED" />
            </button>
            <button className="best-seller-next h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowRightLong size={24} color="#7C3AED" />
            </button>
          </div>
        </div>

        <Swiper
          navigation={{
            nextEl: ".best-seller-next",
            prevEl: ".best-seller-prev",
            disabledClass: "swiper-button-disabled",
          }}
          slidesPerView={5}
          spaceBetween={12}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Navigation]}
          className="mySwiper relative"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            // when window width is >= 480px
            530: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
          }}
        >
          {data?.map((product) => (
            <SwiperSlide key={product._id}>
              {isLoading &&
                [...Array(5)].map((_, index) => <Skelton key={index} />)}
              <Product product={product} badge={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default BestSeller;
