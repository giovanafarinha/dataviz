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
  const percent = "Shooting percent";
  const nb = "Shooting count";
  const dataKeyBar = displayPercent ? percent : nb;
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipContentProps<string | number, string>) => {
    const isVisible = active && payload && payload.length;
    return (
      <div
        className="p-3 text-center bg-gray-200 border-1 border-solid border-gray-400 "
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {isVisible && (
          <>
            <p className="label">{label}</p>
            <p
              className="desc text-indigo-400"
              style={{ display: !displayPercent ? "inherit" : "none" }}
            >{`${payload[0].value} shootings`}</p>
            <p
              className="desc text-indigo-400"
              style={{ display: displayPercent ? "inherit" : "none" }}
            >{`${payload[0].value}%`}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <div className="sepia-60 px-10 py-5 border-2 border-indigo-600 rounded-lg bg-white text-black">
      <h1 className="text-lg font-semibold">Shooting types distribution</h1>
      <div>
        <div>
          <select
            className="bg-indigo-200 rounded-lg px-2 py-2 mb-5"
            value={selectedData}
            onChange={(e) => setSelectedData(e.target.value)}
          >
            <option value="percent">{percent}</option>
            <option value="nb">{nb}</option>
          </select>
        </div>
        <BarChart
          className="bg-white"
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
