"use client";

import imgOne from "@/public/assets/banner-img/banner-1.jpg";
import imgTwo from "@/public/assets/banner-img/banner-2.jpg";
import imgFour from "@/public/assets/banner-img/banner-4.jpg";
import imgFive from "@/public/assets/banner-img/banner-5.jpg";
import Image from "next/image";
import Slider from "react-slick";

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
    <div className="overflow-hidden">
      <Slider {...settings}>
        <Image
          src={imgOne}
          alt="banner image"
          height={280}
          priority
          className="h-[140px] lg:h-[260px] xl:h-[280px]"
        />
        <Image
          src={imgTwo}
          alt="banner image"
          height={280}
          priority
          className="h-[140px] lg:h-[260px] xl:h-[280px]"
        />
        <Image
          src={imgFour}
          alt="banner image"
          height={280}
          priority
          className="h-[140px] lg:h-[260px] xl:h-[280px]"
        />
        <Image
          src={imgFive}
          alt="banner image"
          height={280}
          priority
          className="h-[140px] lg:h-[260px] xl:h-[280px]"
        />
      </Slider>
    </div>
  );
};

export default Banner;
