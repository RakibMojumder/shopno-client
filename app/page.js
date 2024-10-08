import Footer from "./components/Footer";
import Banner from "./components/home/Banner";
import BeautyProducts from "./components/home/BeautyProducts";
import BestSeller from "./components/home/BestSeller";
import Brand from "./components/home/Brand";
import FashionProducts from "./components/home/FashionProducts";
import FeaturedProducts from "./components/home/FeaturedProducts";
import NewsLatter from "./components/home/NewsLatter";
import RecentViews from "./components/home/RecentViews";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/product/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <RecentViews />
      <BestSeller />
      <FashionProducts />
      <BeautyProducts />
      <FeaturedProducts />
      <Brand />
      <NewsLatter />
      <Footer />
    </>
  );
}
