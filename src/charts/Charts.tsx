import apiQuery from "../services/apiQuery";
import DisplayLineChart from "./DisplayLineChart";
import DisplayBarChart from "./DisplayBarChart";
import DisplayVerticalChart from "./DisplayVerticalChart";

import { type chartProps } from "../types/apiParams";

export default function Charts({ chosenChart }: chartProps) {
  const { isPending, error, data } = apiQuery(chosenChart);

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (() => {
    switch (chosenChart.query) {
      case "years":
        return <DisplayLineChart key={chosenChart.query} chartDatas={data} />;
      case "types":
        return <DisplayBarChart key={chosenChart.query} chartDatas={data} />;
      case "ardt":
        return (
          <DisplayVerticalChart key={chosenChart.query} chartDatas={data} />
        );
    }
  })();
}
