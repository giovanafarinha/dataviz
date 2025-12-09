import {
  LineChart, Line,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { type chartsDatabase } from "../types/chartsTypes";

export default function DisplayLineChart({ chartDatas }: chartsDatabase) {
  return (
    <div className="px-10 py-5 border-2 border-gray-200 rounded-lg">
      <h1 className="mb-5 text-lg font-semibold">
        Évolution du nombre de tournages par année
      </h1>
      <LineChart
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "100%",
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
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Nombre de tournages"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
