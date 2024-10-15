import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-6 bg-white">
      <Layout>
        <div className="container grid grid-cols-1 mx-auto gap-x-3 gap-y-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Image src={logo} alt="logo" width={200} />
            <p>
              At Shopno, we believe that shopping should be an enjoyable
              experience filled with variety and convenience. Founded in 2023,
              our mission is to provide a one-stop destination for all your
              shopping needs, offering a diverse range of high-quality products
              across multiple categories.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="w-full md:w-1/2 md:mx-auto">
              <h2 className="font-medium">Pages</h2>
              <div className="flex flex-col space-y-2 text-sm ">
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="w-full md:w-1/2 md:mx-auto">
              <h2 className="font-medium">Community</h2>
              <div className="flex flex-col space-y-2 text-sm ">
                <Link href="/">GitHub</Link>
                <Link href="/">Discord</Link>
                <Link href="/">Twitter</Link>
                <Link href="/">YouTube</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
