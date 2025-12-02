import apiQuery from "../services/apiQuery";
import DisplayLineChart from "./DisplayLineChart";
import DisplayBarChart from "./DisplayBarChart";
import { type apiParam, type apiParamAll } from "../types/apiParam";

export default function Charts({ chosenChart }: any) {
  
  const { isPending, error, data } = apiQuery(chosenChart);

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
        <div>
            {chosenChart.query == "years" ? 
                <DisplayLineChart graphDatas={data} /> : 
                <DisplayBarChart graphDatas={data} />
            }
        </div>
  );
}