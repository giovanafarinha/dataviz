import { useQuery } from "@tanstack/react-query";
import { type TypeGraph, type TypeDatasAPI } from "./Interfaces";

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
        `annee_tournage >= date'${startYear}' AND annee_tournage <= date'${endYear}'`
      );

      // appel API et récupération des données
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("API error");
      const data = await response.json();

      // mise en forme des données
      const graphDatas: TypeGraph[] = data.results.map(
        (apiDatas: TypeDatasAPI) => ({
          year: apiDatas.annee_tournage,
          "Nombre de tournages": apiDatas.total,
        })
      );
      console.log(graphDatas);
      return graphDatas;
    },
  });
}
