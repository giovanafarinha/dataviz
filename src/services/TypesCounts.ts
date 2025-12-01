import { useQuery } from "@tanstack/react-query";
import { type apiTypes } from "../types/apiTypes";
import { type chartsTypes } from "../types/chartsTypes";

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
      const allTypesTotal = data.results.reduce((sum: number, { total }: apiTypes) => sum + total, 0);
      const graphDatas: chartsTypes[] = data.results.map((apiDatas: apiTypes) => (
        {
          type: apiDatas.type_tournage,
          "Nombre de tournages": apiDatas.total,
          "Poucentage de tournages": Math.round((apiDatas.total * 100) / allTypesTotal)
        }
      ));
      
      return graphDatas;
    },
  });
}