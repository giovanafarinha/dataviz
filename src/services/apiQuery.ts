import { useQuery } from "@tanstack/react-query";
import type apiTypes from "../types/apiTypes";
import { type chartsTypes } from "../types/chartsTypes";
import { type apiParam } from "../types/apiParam";

export default function apiQuery(params: apiParam) {
  return useQuery({
    queryKey: ["types-counts", params],
    queryFn: async () => {
      // préparation de la requête SQL
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      const selectParam = (params.query == "years") ? `year(${params.select}) as year` : `${params.select}`;
      url.searchParams.set(
        "select",
        `${selectParam}, count(${params.select}) as total`
      );
      url.searchParams.set(
        "group_by",
        params.select
      );
      if (params.query == "years") {
        url.searchParams.set(
            "where",
            `${params.select} >=  ${params.startYear} AND ${params.select} <= ${params.endYear}`
        );
      }
      url.searchParams.set(
        "order_by",
        `${params.select} ASC`
      );

      // appel API et récupération des données
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("API error");
      const data = await response.json();
      
      // mise en forme des données
      const allTypesTotal = data.results.reduce((sum: number, { total }: apiTypes) => sum + total, 0);
      const graphDatas: chartsTypes[] = data.results.map(function (apiDatas: apiTypes) {
        const select: string = params.select;
        const chartPoint: chartsTypes = {
          xAxe: apiDatas[select],
          "Nombre de tournages": apiDatas.total,
        }
        if (params.query == "years") {
            chartPoint.xAxe = apiDatas.year
        }
        if (params.query == "types") {
            chartPoint["Poucentage de tournages"] = Math.round((apiDatas.total * 100) / allTypesTotal);
        }
        return chartPoint;
      });
      
      return graphDatas;
    },
  });
}