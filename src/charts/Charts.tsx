import YearsCounts from "../services/YearsCounts";
import TypesCounts from "../services/TypesCounts";
import DisplayLineChart from "./DisplayLineChart";
import DisplayBarChart from "./DisplayBarChart";

export default function Charts({ chosenChart }: any) {
  const { isPending, error, data } = (chosenChart == "line") ? YearsCounts(2016, 2024) : TypesCounts() ;

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
        <div>
            {chosenChart == "line" ? 
                <DisplayLineChart graphDatas={data} /> : 
                <DisplayBarChart graphDatas={data} />
            }
        </div>
  );
}