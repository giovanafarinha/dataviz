import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  type TooltipContentProps,
} from "recharts";
import { type chartsDatabase } from "../types/chartsTypes";
export default function ThreeDimScatterChart({ chartDatas }: chartsDatabase) {
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipContentProps<string | number, string>) => {
    const isVisible = active && payload && payload.length;
    return (
      <div
        className="p-3 text-center bg-gray-200 border-1 border-solid border-gray-400"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        {isVisible && (
          <>
            <p className="label">{`${label}`}</p>
            <p className="desc text-indigo-400">{`${payload[0].value} shootings`}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <div className="sepia-60  px-5 py-5 border-2 border-indigo-600 rounded-lg bg-white text-black">
      <h1 className="text-lg font-semibold"> Top producers </h1>
      <ScatterChart
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
          top: 20,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xAxe" />
        <YAxis width="auto" />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Scatter dataKey="Shooting count" fill="#8884d8" shape="star" />
      </ScatterChart>
    </div>
  );
}
