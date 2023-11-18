import StarComponent from "../StarComponent";
import Checkbox from "./Checkbox";
import PriceSlider from "./PriceSlider";
import Radio from "./Radio";

const Filter = () => {
  return (
    <div className="w-[270px] bg-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Filter</h2>
      <PriceSlider />

      {/* CATEGORIES */}
      <div className="mt-10">
        <h3 className="border-b pb-2">Categories</h3>
        <div className="pl-5 mt-3">
          <Checkbox name="Fashion" />
          <Checkbox name="Beauty" />
          <Checkbox name="Baby" />
          <Checkbox name="Kitchen" />
          <Checkbox name="Health" />
          <Checkbox name="Electronics" />
          <Checkbox name="Automobile" />
          <Checkbox name="Laptop" />
          <Checkbox name="Mobile" />
          <Checkbox name="Gymnasium" />
        </div>
      </div>

      {/* SORT BY PRICE */}
      <div className="mt-8">
        <h3 className="border-b pb-2">Sort By Price</h3>
        <div className="pl-5 mt-3">
          <Radio label="Low To Hight" value={"1"} />
          <Radio label="Hight To Low" value={"-1"} />
        </div>
      </div>

      {/* SORT BY RATINGS */}
      <div className="mt-8">
        <h3 className="border-b pb-2">Ratings</h3>
        <StarComponent star={5} />
      </div>
    </div>
  );
};

export default Filter;
