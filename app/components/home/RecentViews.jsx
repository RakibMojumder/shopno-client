"use client";

import { useSelector } from "react-redux";
import Layout from "../Layout";
import Product from "../product/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import Skelton from "../Skelton";
import "swiper/css/effect-coverflow";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Navigation } from "swiper/modules";

const RecentViews = () => {
  const recentView = useSelector((state) => state.cart.recentView);

  return (
    <Layout>
      <div className="pb-28">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold my-5 text-black">
            Recent Views
          </h3>
          <div className="flex items-center gap-x-6">
            <button className="recent-view-prev h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowLeftLong size={24} color="#7C3AED" />
            </button>
            <button className="recent-view-next h-10 w-10 duration-300 hover:bg-secondary/[.15] rounded-full flex justify-center items-center cursor-pointer">
              <FaArrowRightLong size={24} color="#7C3AED" />
            </button>
          </div>
        </div>

        <Swiper
          navigation={{
            nextEl: ".recent-view-next",
            prevEl: ".recent-view-prev",
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
          {recentView.map((product) => (
            <SwiperSlide key={product._id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default RecentViews;
