import {
  AreaChart, Area,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { type chartsDatabase, type chartModel } from "../types/chartsTypes";

export default function DisplayStackedAreaChart({chartDatas}: chartsDatabase) {
  // liste des couleurs de graphiques
  let colorChoice = 0;
  const chartColors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#f17d7dff",
    "#7df1deff",
  ];
  function displayColor(color: number, change: boolean) {
    colorChoice = color < 5 ? color : 0;
    const returnColor = chartColors[colorChoice];
    if (change) {
      colorChoice++;
    }
    return returnColor;
  }
  // liste des tournages pour afficher un graphique chacun
  const shotsList: string[] = [];
  function shotList(point: chartModel) {
    Object.keys(point).map((key) => {
      if (key != "xAxe") {
        shotsList.push(key);
      }
    });
  }
  shotList(chartDatas[0] as chartModel);
  return (
    <div className="sepia-60 px-5 py-5 border-2 border-indigo-600 rounded-lg bg-white text-black">
      <h1 className="text-lg font-semibold">Types × Years</h1>
      <AreaChart
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
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xAxe" />
        <YAxis width="auto" />
        <Tooltip />
        {shotsList.map((key) => (
          <Area
            type="monotone"
            dataKey={key}
            stackId="1"
            stroke={displayColor(colorChoice, false)}
            fill={displayColor(colorChoice, true)}
          />
        ))}
      </AreaChart>
    </div>
  );
}
