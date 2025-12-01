import { useQuery } from "@tanstack/react-query";
import { type apiTypes } from "../types/apiTypes";
import { type chartsTypes } from "../types/chartsTypes";

export default function YearsCounts(startYear: number, endYear: number) {
  return useQuery({
    queryKey: ["years-counts", startYear, endYear],
    queryFn: async () => {

      // préparation de la requête SQL
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      url.searchParams.set("select", "annee_tournage, count(*) as total");
      url.searchParams.set("group_by", "annee_tournage");
      url.searchParams.set(
        "where",
        "annee_tournage >= " + startYear + " AND annee_tournage <= " + endYear
      );

      // appel API et récupération des données
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("API error");
      const data = await response.json();

      // mise en forme des données
      const graphDatas: chartsTypes[] = data.results.map(
        (apiDatas: apiTypes) => (
          {
            year: apiDatas.annee_tournage.substring(0, 4),
            "Nombre de tournages": apiDatas.total,
          })
      );

      return graphDatas;
    },
  });
}
