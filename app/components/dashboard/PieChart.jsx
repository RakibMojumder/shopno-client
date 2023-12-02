"use client";

import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ data }) => (
  <div className="xl:col-span-8 h-[400px] relative border bg-white rounded-xl">
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      colors={{ datum: "data.color" }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
    />
    <h1 className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
      1000
    </h1>
  </div>
);

export default PieChart;
