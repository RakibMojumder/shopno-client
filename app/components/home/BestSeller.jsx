"use client";

import Product from "../product/Product";
import Layout from "../Layout";
import { useQuery } from "react-query";
import axios from "@/utils/axios.config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// import required modules
import { Navigation } from "swiper/modules";
import Skelton from "../Skelton";
import { useDispatch } from "react-redux";
import { setSearchValue } from "@/redux/features/productSlice";
import { useState } from "react";

const BestSeller = () => {
  const dispatch = useDispatch();
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, isLoading } = useQuery("products", async () => {
    dispatch(setSearchValue(""));
    const res = await axios.get("/product/best-seller");
    return res.data.data;
  });

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Layout>
      <div className="pt-20 pb-28">
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-5 text-black">
            Best Seller
          </h3>
          <div className="flex items-center gap-x-6">
            <button className="best-seller-prev h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowLeftLong
                className={`text-xl ${
                  activeIndex <= 0 ? "text-primary" : "text-secondary"
                }`}
              />
            </button>
            <button className="best-seller-next h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowRightLong
                className={`text-xl ${
                  isEnd ? "text-primary" : "text-secondary"
                }`}
              />
            </button>
          </div>
        </div>

        <Swiper
          navigation={{
            nextEl: ".best-seller-next",
            prevEl: ".best-seller-prev",
            disabledClass: "swiper-button-disabled",
          }}
          // slidesPerView={5}
          spaceBetween={12}
          onSlideChange={handleSlideChange}
          modules={[Navigation]}
          className="mySwiper relative"
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            // when window width is >= 320px
            450: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            // when window width is >= 480px
            620: {
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
          {isLoading &&
            [...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <Skelton />
              </SwiperSlide>
            ))}
          {data?.map((product) => (
            <SwiperSlide key={product._id}>
              <Product product={product} badge={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default BestSeller;
