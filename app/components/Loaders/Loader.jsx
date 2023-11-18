import loader from "@/public/assets/loader.gif";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh_-_160px)] flex justify-center items-center">
      <Image src={loader} alt="loader" height={70} width={70} />
    </div>
  );
};

export default Loader;
