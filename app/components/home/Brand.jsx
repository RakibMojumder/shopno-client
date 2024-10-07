"use client";

import { brandImage } from "@/utils/data";
import Image from "next/image";
import Layout from "../Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HeaderText from "./HeaderText";

const Brand = () => {
  return (
    <Layout>
      <div className="mb-28 w-full overflow-hidden">
        <HeaderText label="Our trusted company" />
        <div className="py-10">
          <Swiper
            navigation={{
              nextEl: ".best-seller-next",
              prevEl: ".best-seller-prev",
              disabledClass: "swiper-button-disabled",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            spaceBetween={12}
            modules={[Autoplay]}
            className="mySwiper relative flex items-center"
            breakpoints={{
              0: {
                slidesPerView: 2,
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
            {brandImage?.map((brand) => (
              <SwiperSlide
                key={brand.id}
                className="flex justify-center opacity-40 transition-all duration-500 hover:opacity-100"
              >
                <Image
                  alt="brand image"
                  src={brand.image}
                  width={110}
                  height={40}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Brand;
