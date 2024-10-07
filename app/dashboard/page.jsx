import PieChart from "../components/dashboard/PieChart";
import { pieData } from "@/utils/data";
import AreaChart from "../components/dashboard/AreaChart";
import Sales from "../components/dashboard/Sales";
import TotalOrder from "../components/dashboard/TotalOrder";
import TotalEarned from "../components/dashboard/TotalEarned";
import TotalUsers from "../components/dashboard/TotalUsers";
import BarChart from "../components/dashboard/BarChart";

const Dashboard = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <Sales amount={43124} label={"Month"} />
        <TotalOrder amount={321} label={"Month"} />
        <TotalEarned amount={7643} label={"Month"} />
        <TotalUsers amount={30} label={"Month"} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 my-5">
        <div className="xl:col-span-5 bg-white border p-5 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-center">
            Payment Method
          </h3>
          <BarChart />
        </div>
        <PieChart data={pieData} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
        <AreaChart />
        <div className="xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Sales amount={342342} label={"Year"} />
          <TotalOrder amount={12134} label={"Year"} />
          <TotalEarned amount={92543} label={"Year"} />
          <TotalUsers amount={921} label={"Year"} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
