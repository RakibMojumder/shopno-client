"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../Layout";
import Skelton from "../Skelton";
import Product from "../product/Product";
import { Autoplay, Navigation } from "swiper/modules";
import { useGetProductsByCategoryQuery } from "@/redux/api/productApi";
import HeaderText from "./HeaderText";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const BeautyProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const { isLoading, data } = useGetProductsByCategoryQuery("Beauty");

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Layout>
      <div className="pb-28">
        <HeaderText label={"Beauty Products"} />

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-between gap-x-3 w-full absolute top-1/2 -translate-y-1/2 z-20">
            <button
              className={`beauty-prev h-8 lg:h-11 w-8 lg:w-11 duration-300 bg-secondary flex justify-center items-center cursor-pointer ${
                activeIndex < 1 && "invisible"
              }`}
            >
              <IoIosArrowBack className="lg:text-xl text-white" />
            </button>
            <button
              className={`beauty-next h-8 lg:h-11 w-8 lg:w-11 duration-300 bg-secondary flex justify-center items-center cursor-pointer ${
                isEnd && "invisible"
              }`}
            >
              <IoIosArrowForward className="lg:text-xl text-white" />
            </button>
          </div>
          <Swiper
            navigation={{
              nextEl: ".beauty-next",
              prevEl: ".beauty-prev",
              disabledClass: "swiper-button-disabled",
            }}
            // slidesPerView={5}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
            spaceBetween={12}
            modules={[Navigation, Autoplay]}
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
      </div>
    </Layout>
  );
};

export default BeautyProducts;
