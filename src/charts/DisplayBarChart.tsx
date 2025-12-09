import { useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  type TooltipContentProps,
} from "recharts";
import { type chartsDatabase } from "../types/chartsTypes";

export default function DisplayBarChart({ chartDatas }: chartsDatabase) {
  const [selectedData, setSelectedData] = useState("percent");
  const displayPercent = selectedData == "percent" ? true : false;
  const percent = "Poucentage de tournages";
  const nb = "Nombre de tournages";
  const dataKeyBar = displayPercent ? percent : nb;
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipContentProps<string | number, string>) => {
    const isVisible = active && payload && payload.length;
    return (
      <div
        className="p-3 text-center bg-white border-1 border-solid border-gray-300"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {isVisible && (
          <>
            <p className="label">{label}</p>
            <p
              className="desc text-gray-950"
              style={{ display: !displayPercent ? "inherit" : "none" }}
            >{`${payload[0].value} tournages`}</p>
            <p
              className="desc text-gray-400"
              style={{ display: displayPercent ? "inherit" : "none" }}
            >{`${payload[0].value}%`}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <div className=" px-10 py-5 border-2 border-gray-200 rounded-lg">
      <h1 className=" mb-5 text-lg font-semibold">
        {" "}
        Répartition par type de tournage
      </h1>
      <div>
        <select
          value={selectedData}
          onChange={(e) => setSelectedData(e.target.value)}
        >
          <option value="percent">{percent}</option>
          <option value="nb">{nb}</option>
        </select>
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={chartDatas}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xAxe" />
          <YAxis width="auto" />
          <Tooltip content={CustomTooltip} />
          <Legend />
          <Bar
            dataKey={dataKeyBar}
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </div>
    </div>
  );
}
