"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../Layout";
import Skelton from "../Skelton";
import Product from "../product/Product";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { useGetProductsByCategoryQuery } from "@/redux/api/productApi";

const FashionProducts = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isLoading, data } = useGetProductsByCategoryQuery("Fashion");

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Layout>
      <div className="pb-28">
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-5 text-black">
            Fashion Products
          </h3>
          <div className="flex items-center gap-x-3">
            <button className="fashion-prev h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowLeftLong
                className={`text-xl ${
                  activeIndex <= 0 ? "text-primary" : "text-secondary"
                }`}
              />
            </button>
            <button className="fashion-next h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
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
            nextEl: ".fashion-next",
            prevEl: ".fashion-prev",
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
          {data?.data?.map((product) => (
            <SwiperSlide key={product._id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default FashionProducts;
