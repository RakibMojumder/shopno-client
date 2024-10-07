"use client";

import { lineChartData } from "@/utils/data";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AreaChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Revenue Par Year",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    width: "100%",
  };

  const labels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Revenue",
        data: lineChartData,
        borderColor: "#7C3AED",
        backgroundColor: ({ chart: { ctx } }) => {
          const bg = ctx.createLinearGradient(0, 0, 0, 400);
          bg.addColorStop(0.2, "rgba(124, 58, 237, .5)");
          bg.addColorStop(1, "rgba(124, 58, 237, .1)");
          return bg;
        },
      },
    ],
  };

  return (
    <div className="xl:col-span-7 rounded-xl p-5 bg-white border">
      <Line options={options} data={data} style={{ width: "100%!" }} />
    </div>
  );
};

export default AreaChart;
