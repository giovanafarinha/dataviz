import apiQuery from "../services/apiQuery";
import DisplayLineChart from "./DisplayLineChart";
import DisplayBarChart from "./DisplayBarChart";
import { type chartProps } from "../types/apiParams";

export default function Charts({ chosenChart }: chartProps) {
  
  const { isPending, error, data } = apiQuery(chosenChart);

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
        <div>
            
            {chosenChart.query == "years" ? <DisplayLineChart chartDatas={data} /> : <> </>}
            {chosenChart.query == "types" ? <DisplayBarChart chartDatas={data} /> : <> </> }
            {chosenChart.query == "ardt" ? <DisplayBarChart chartDatas={data} /> : <> </>}
            
        </div>
  );
}