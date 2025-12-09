import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { type chartsDatabase } from "../types/chartsTypes";

export default function DisplayStackedAreaChart({
  chartDatas,
}: chartsDatabase) {
  return (
    <>
      <AreaChart
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
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xAxe" />
        <YAxis width="auto" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Long métrage"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Téléfilm"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="Série TV"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Area
          type="monotone"
          dataKey="Série Web"
          stackId="1"
          stroke="#f17d7dff"
          fill="#caff58ff"
        />
      </AreaChart>
    </>
  );
}
