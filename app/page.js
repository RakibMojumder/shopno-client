import Footer from "./components/Footer";
import Banner from "./components/home/Banner";
import BestSeller from "./components/home/BestSeller";
import Brand from "./components/home/Brand";
import FeaturedProducts from "./components/home/FeaturedProducts";
import RecentViews from "./components/home/RecentViews";
import SuggestProducts from "./components/home/SuggestProducts";
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
      {/* <SuggestProducts /> */}
      <FeaturedProducts />
      <Brand />
      <Footer />
    </>
  )
}
