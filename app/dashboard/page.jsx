import PieChart from "../components/dashboard/PieChart";
import { pieData } from "@/utils/data";
import AreaChart from "../components/dashboard/AreaChart";
import Sales from "../components/dashboard/Sales";
import TotalOrder from "../components/dashboard/TotalOrder";
import TotalEarned from "../components/dashboard/TotalEarned";
import TotalUsers from "../components/dashboard/TotalUsers";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <Sales />
        <TotalOrder />
        <TotalEarned />
        <TotalUsers />
      </div>
      <div className="grid grid-cols-12 gap-5 my-14">
        <div className="col-span-4 bg-white p-5 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Payment Method</h3>
          <div className="space-y-4">
            <div>
              <h4>Stripe</h4>
              <div className="bg-neutral-300 h-1.5 rounded-full relative after:absolute after:top-0 after:left-0 after:h-full after:w-1/4 after:bg-indigo-500 after:rounded-full"></div>
            </div>
            <div>
              <h4>Debit Card</h4>
              <div className="bg-neutral-300 h-1.5 rounded-full relative after:absolute after:top-0 after:left-0 after:h-full after:w-1/3 after:bg-yellow-500 after:rounded-full"></div>
            </div>
            <div>
              <h4>bKash payment</h4>
              <div className="bg-neutral-300 h-1.5 rounded-full relative after:absolute after:top-0 after:left-0 after:h-full after:w-4/5 after:bg-pink-500 after:rounded-full"></div>
            </div>
            <div>
              <h4>Nogod payment</h4>
              <div className="bg-neutral-300 h-1.5 rounded-full relative after:absolute after:top-0 after:left-0 after:h-full after:w-1/2 after:bg-orange-500 after:rounded-full"></div>
            </div>
          </div>
        </div>
        <PieChart data={pieData} />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <AreaChart />
        <div className="col-span-5 grid grid-cols-2 gap-5">
          <Sales />
          <TotalOrder />
          <TotalEarned />
          <TotalUsers />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
