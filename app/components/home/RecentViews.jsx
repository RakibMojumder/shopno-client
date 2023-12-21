"use client";

import { useSelector } from "react-redux";
import Layout from "../Layout";
import Product from "../product/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/effect-coverflow";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import HeaderText from "./HeaderText";

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
          <HeaderText label={"Recent Views"} />

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
