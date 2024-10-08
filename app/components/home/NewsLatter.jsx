import Image from "next/image";
import Button from "../Button";
import Layout from "../Layout";
import newsLatterImage from "@/public/assets/news-letter.jpeg";

const NewsLatter = () => {
  return (
    <Layout>
      <div className="py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:w-4/5 mx-auto bg-white mb-10">
        <div className="flex justify-center items-center">
          <Image
            alt="news latter image"
            src={newsLatterImage}
            className="contain"
          />
        </div>
        <div className="space-y-7">
          <div className="text-left space-y-7">
            <h5>Newsletter</h5>
            <h1 className="text-4xl">Subscribe to our Newsletter</h1>
            <p>
              It only takes a second to be the first to find out about our
              latest news and promotions.
            </p>
          </div>
          <input
            type="text"
            placeholder="Your email address"
            className="py-3 pl-5 border-b-2 border-black w-full bg-transparent focus:outline-none"
          />
          <Button className="rounded-none bg-black text-white py-2.5 px-8">
            Submit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NewsLatter;
