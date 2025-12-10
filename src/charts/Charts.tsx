import { type chartProps } from "../types/apiParams";
import { type chartsTypes } from "../types/chartsTypes";
import apiQuery from "../services/apiQuery";
import DisplayBarChart from "./DisplayBarChart";
import DisplayDotLineChart from "./DisplayDotLineChart";
import DisplayLineChart from "./DisplayLineChart";
import DisplayStackedAreaChart from "./DisplayStackedAreaChart";
import DisplayVerticalChart from "./DisplayVerticalChart";
import DisplayVerticalLineChart from "./DisplayVerticalLineChart";
export default function Charts({ chosenChart }: chartProps) {
  let datasForChart: chartsTypes[];
  const { isPending, error, data } = apiQuery(chosenChart);
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  datasForChart = data;
  const chartList = {
    years: (
      <DisplayLineChart key={chosenChart.query} chartDatas={datasForChart} />
    ),
    types: (
      <DisplayBarChart key={chosenChart.query} chartDatas={datasForChart} />
    ),
    directors: (
      <DisplayDotLineChart key={chosenChart.query} chartDatas={datasForChart} />
    ),
    producers: (
      <DisplayVerticalLineChart
        key={chosenChart.query}
        chartDatas={datasForChart}
      />
    ),
    typesXyears: (
      <DisplayStackedAreaChart
        key={chosenChart.query}
        chartDatas={datasForChart}
      />
    ),
    ardt: (
      <DisplayVerticalChart
        key={chosenChart.query}
        chartDatas={datasForChart}
      />
    ),
  };
  return chartList[chosenChart.query];
}
