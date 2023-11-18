"use client";

import brandOne from "@/public/assets/brand-img/brand-1.png";
import brandTwo from "@/public/assets/brand-img/brand-2.png";
import brandThree from "@/public/assets/brand-img/brand-3.png";
import brandFive from "@/public/assets/brand-img/brand-5.png";
import brandSix from "@/public/assets/brand-img/brand-6.png";
import brandSeven from "@/public/assets/brand-img/brand-7.png";
import brandEight from "@/public/assets/brand-img/brand-8.png";
import Image from "next/image";
import Slider from "react-slick";

const Brand = () => {
  const settings = {
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div className="mb-28 w-full bg-white overflow-hidden">
      <h1 className="text-3xl pt-12 font-bold text-black pl-10">
        Our <span className="text-primary">Trusted</span> Company
      </h1>
      <div className="pb-28 pt-16">
        <Slider {...settings}>
          <Image
            src={brandOne}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandTwo}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandThree}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandFive}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandSix}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandSeven}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandEight}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandOne}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandTwo}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandThree}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandFive}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandSix}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandSeven}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
          <Image
            src={brandEight}
            alt="brand image"
            height={128}
            width={128}
            // className="h-28 w-16"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
