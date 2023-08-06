import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-[13%]">
      <Link href="/">
        <Image src={logo} alt="shopno logo" height={64} className="h-10" />
      </Link>
    </div>
  );
};

export default Logo;
