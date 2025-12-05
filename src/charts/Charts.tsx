import apiQuery from "../services/apiQuery";
import DisplayLineChart from "./DisplayLineChart";
import DisplayBarChart from "./DisplayBarChart";
import DisplayVerticalChart from "./DisplayVerticalChart";

import { type chartProps } from "../types/apiParams";

export default function Charts({ chosenChart }: chartProps) {
  const { isPending, error, data } = apiQuery(chosenChart);

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  const chartList = {
      years: <DisplayLineChart key={chosenChart.query} chartDatas={data} />,
      types: <DisplayBarChart key={chosenChart.query} chartDatas={data} />,
      ardt: <DisplayVerticalChart key={chosenChart.query} chartDatas={data} />,
      filmmakers: <DisplayLineChart key={chosenChart.query} chartDatas={data} />
  }
  return chartList[chosenChart.query]
}
