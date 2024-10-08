import headerImage from "@/public/assets/header-img.png";
import Image from "next/image";

const HeaderText = ({ label }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <h3 className="text-3xl text-black">{label}</h3>
      <Image
        src={headerImage}
        alt="header image"
        height={15}
        width={450}
        priority
      />
    </div>
  );
};

export default HeaderText;
