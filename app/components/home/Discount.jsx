import img from "@/public/assets/discount1.jpg";
import Image from "next/image";

const Discount = () => {
  return (
    <div className="pb-28">
      <Image
        src={img}
        alt="discount image"
        className="h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
      />
    </div>
  );
};

export default Discount;
