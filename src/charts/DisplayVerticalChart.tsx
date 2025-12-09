import {
  ComposedChart, Area,
  XAxis, YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  type TooltipContentProps,
} from "recharts";
import { type chartsDatabase } from "../types/chartsTypes";

export default function DisplayVerticalChart({ chartDatas }: chartsDatabase) {const CustomTooltip = ({
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
            <p className="label">{label}</p>
            <p className="desc text-indigo-400">{`${payload[0].value} shootings`}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <div className="sepia-60  px-5 py-5 border-2 border-indigo-600 rounded-lg bg-white text-black">
      <h1 className="text-lg font-semibold">Shooting per district</h1>
      <ComposedChart
        className="bg-white "
        layout="vertical"
        style={{
          width: "100%",
          maxWidth: "300px",
          maxHeight: "70vh",
          aspectRatio: 1 / 1.618,
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
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis
          dataKey="xAxe"
          type="category"
          scale="band"
          width="auto"
          interval={0}
        />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Area dataKey="Shooting count" fill="#8884d8" stroke="#8884d8" />
      </ComposedChart>
    </div>
  );
}
