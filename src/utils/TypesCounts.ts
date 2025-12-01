import { useQuery } from "@tanstack/react-query";
import { type TypeGraph, type TypeDatasAPI } from "./Interfaces";

export default function TypesCounts() {
  return useQuery({
    queryKey: ["types-counts"],
    queryFn: async () => {
      // préparation de la requête SQL
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      url.searchParams.set(
        "select",
        "type_tournage,count(type_tournage) as total"
      );
      url.searchParams.set(
        "group_by",
        "type_tournage"
      );

      // appel API et récupération des données
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("API error");
      const data = await response.json();
      
      // mise en forme des données
      const allTypesTotal = data.results.reduce((sum: number, { total }: TypeDatasAPI) => sum + total, 0);
      const graphDatas: TypeGraph[] = data.results.map((apiDatas: TypeDatasAPI) => (
        {
          type: apiDatas.type_tournage,
          "Nombre de tournages": apiDatas.total,
          "Poucentage de tournages": Math.round((apiDatas.total * 100) / allTypesTotal)
        }
      ));
 console.log(graphDatas);
      return graphDatas;
    },
  });
}