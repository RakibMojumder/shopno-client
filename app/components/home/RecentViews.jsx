"use client";

import { useSelector } from "react-redux";
import Layout from "../Layout";
import Product from "../product/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/effect-coverflow";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const RecentViews = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const recentView = useSelector((state) => state.cart.recentView);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Layout>
      {recentView?.length > 0 && (
        <div className="pb-28">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-5 text-black">
              Recent Views
            </h3>

            <div className="flex items-center gap-x-3">
              <button className="recent-view-prev h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
                <FaArrowLeftLong
                  className={`text-xl ${
                    activeIndex <= 0 ? "text-primary" : "text-secondary"
                  }`}
                />
              </button>
              <button className="recent-view-next h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
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
              nextEl: ".recent-view-next",
              prevEl: ".recent-view-prev",
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
            {recentView.map((product) => (
              <SwiperSlide key={product._id}>
                <Product product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </Layout>
  );
};

export default RecentViews;
