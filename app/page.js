import Banner from "./components/home/Banner";
import BestSeller from "./components/home/BestSeller";
import Brand from "./components/home/Brand";
import Discount from "./components/home/Discount";
import FeaturedProducts from "./components/home/FeaturedProducts";
import RecentViews from "./components/home/RecentViews";
import SuggestProducts from "./components/home/SuggestProducts";


export default function Home() {
  return (
    <>
      <Banner />
      {/* <BestSeller /> */}
      <Brand />
      {/* <SuggestProducts /> */}
      <FeaturedProducts />
      <Discount />
      {/* <RecentViews /> */}
    </>
  )
}
