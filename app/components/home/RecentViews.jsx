"use client";

import { useSelector } from "react-redux";
import Layout from "../Layout";
import Product from "../product/Product";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/effect-coverflow";
import { Navigation } from "swiper/modules";
import HeaderText from "./HeaderText";

const RecentViews = () => {
  const recentView = useSelector((state) => state.cart.recentView);

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
            {recentView.slice(0, 5).map((product) => (
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
