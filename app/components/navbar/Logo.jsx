import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-28 sm:w-[130px] md:w-[150px] xl:w-[180px] order-1 cursor-pointer">
      <Link href="/">
        <Image
          src={logo}
          alt="shopno logo"
          height={64}
          className="h-8 md:h-10"
        />
      </Link>
    </div>
  );
};

export default Logo;
