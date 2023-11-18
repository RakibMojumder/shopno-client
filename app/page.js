import Footer from "./components/Footer";
import Banner from "./components/home/Banner";
import BestSeller from "./components/home/BestSeller";
import Brand from "./components/home/Brand";
import Discount from "./components/home/Discount";
import FeaturedProducts from "./components/home/FeaturedProducts";
import RecentViews from "./components/home/RecentViews";
import SuggestProducts from "./components/home/SuggestProducts";
import Navbar from "./components/navbar/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <BestSeller /> */}
      <Brand />
      {/* <SuggestProducts /> */}
      <FeaturedProducts />
      <Discount />
      {/* <RecentViews /> */}
      <Footer />
    </>
  )
}
