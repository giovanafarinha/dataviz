import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { type chartsDatabase } from "../types/chartsTypes";

export default function DisplayVerticalChart({ chartDatas }: chartsDatabase) {
  return (
    <ComposedChart
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
      <Tooltip />
      <Legend />
      <Area dataKey="Nombre de tournages" fill="#8884d8" stroke="#8884d8" />
    </ComposedChart>
  );
}
