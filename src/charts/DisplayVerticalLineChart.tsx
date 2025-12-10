import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  type TooltipContentProps,
} from "recharts";
import { type chartsDatabase } from "../types/chartsTypes";

export default function DisplayVerticalLineChart({ chartDatas }: chartsDatabase) {
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
            <p className="label text-black">{label}</p>
            <p className="desc text-indigo-400">{`${payload[0].value} shootings`}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <div className=" sepia-60 px-10 py-5 border-2 border-indigo-600  rounded-lg bg-white text-white">
      <h1 className="mb-5 text-lg font-semibold text-black">Top producers</h1>
    <LineChart
      className="bg-white"
      layout="vertical"
      style={{
          width: "100%",
          maxHeight: "70vh",
          aspectRatio: 1 / 1.618
      }}
      responsive
      data={chartDatas}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 15,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={['dataMin', 'dataMax']} padding={{ left: 5, right: 10 }} interval="preserveStartEnd" />
      <YAxis dataKey="xAxe" type="category" width="auto" interval="preserveStart" padding={{ top: 10 }} />
      <Tooltip content={CustomTooltip} />
      <Legend />
      <Line dataKey="Shooting count" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
    </div>
  );
}