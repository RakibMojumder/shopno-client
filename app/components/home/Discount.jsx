import img from "@/public/assets/discount1.jpg";
import Image from "next/image";

const Discount = () => {
  return (
    <div className="pb-28">
      <Image src={img} alt="discount image" className="h-[450px]" />
    </div>
  );
};

export default Discount;
