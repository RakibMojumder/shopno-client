"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../Layout";
import Skelton from "../Skelton";
import Product from "../product/Product";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { useGetProductsByCategoryQuery } from "@/redux/api/productApi";
import Image from "next/image";
import HeaderText from "./HeaderText";

const BeautyProducts = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isLoading, data } = useGetProductsByCategoryQuery("Beauty");

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Layout>
      <div className="pb-28">
        <HeaderText label={"Beauty Products"} />

        <Swiper
          navigation={{
            nextEl: ".beauty-next",
            prevEl: ".beauty-prev",
            disabledClass: "swiper-button-disabled",
          }}
          // slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={12}
          onSlideChange={handleSlideChange}
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
    </Layout>
  );
};

export default BeautyProducts;
