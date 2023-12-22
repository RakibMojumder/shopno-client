"use client";

import imgOne from "@/public/assets/banner-img/banner-1.jpg";
import imgTwo from "@/public/assets/banner-img/banner-2.jpg";
import imgFour from "@/public/assets/banner-img/banner-4.jpg";
import imgFive from "@/public/assets/banner-img/banner-5.jpg";
import imgSix from "@/public/assets/banner-img/banner-6.png";
import imgSeven from "@/public/assets/banner-img/banner-7.png";
import Image from "next/image";
import Slider from "react-slick";
import Layout from "../Layout";

const Banner = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-3 mt-4">
        <div className="col-span-12 md:col-span-8 xl:col-span-9 overflow-hidden">
          <Slider {...settings}>
            <Image
              src={imgOne}
              alt="banner image"
              height={320}
              priority
              className="h-[150px] md:h-[260px] xl:h-[310px]"
            />
            <Image
              src={imgTwo}
              alt="banner image"
              height={320}
              priority
              className="h-[150px] md:h-[260px] xl:h-[310px]"
            />
            <Image
              src={imgFour}
              alt="banner image"
              height={320}
              priority
              className="h-[150px] md:h-[260px] xl:h-[310px]"
            />
            <Image
              src={imgFive}
              alt="banner image"
              height={320}
              priority
              className="h-[150px] md:h-[260px] xl:h-[310px]"
            />
          </Slider>
        </div>

        <div className="col-span-12 md:col-span-4 xl:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-3">
          <Image
            src={imgSix}
            alt="banner-img"
            height={150}
            width={350}
            className="h-[110px] sm:h-[130px] lg:h-[150px] w-full"
          />
          <Image
            src={imgSeven}
            alt="banner-img"
            height={150}
            width={350}
            className="h-[110px] sm:h-[130px] lg:h-[150px] w-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
