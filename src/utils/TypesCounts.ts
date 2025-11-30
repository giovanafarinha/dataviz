import { useQuery } from "@tanstack/react-query";
import { type TypeDatasAPI } from "./Interfaces";
export default function TypesCounts() {
  return useQuery({
    queryKey: ["types-counts"],
    queryFn: async () => {

      const url = new URL("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records");
      url.searchParams.set("select", "type_tournage,count(type_tournage) as total");
      url.searchParams.set("group_by", "type_tournage");

      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("API error");
      const data = await response.json();
      let allTypesTotal = 0;
      data.results.map((result: TypeDatasAPI) => allTypesTotal += result.total);
      const graphDatas = new Array;
      data.results.map((result: TypeDatasAPI) => graphDatas.push({
          "type": result.type_tournage,
          "Nombre de tournages": result.total,
          "Poucentage de tournages": ((result.total * 100) / allTypesTotal).toFixed(0)
        }));
      return graphDatas;
    },
  });
}