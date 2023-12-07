"use client";

import dynamic from "next/dynamic";
// import Chart from "react-apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const options = {
    chart: {
      id: "apexchart-example",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Stripe", "Debit Card", "Bkash", "Nogod"],
    },
    plotOptions: {
      bar: {
        distributed: true, // this line is mandatory
      },
    },
    colors: [
      // this array contains different color code for each data
      "#7C3AED",
      "#5F64F4",
      "#D626D9",
      "#13d8aa",
    ],
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={320}
      width={"100%"}
    />
  );
};

export default BarChart;
