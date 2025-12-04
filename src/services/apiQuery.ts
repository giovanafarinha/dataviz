import { useQuery } from "@tanstack/react-query";
import type apiTypes from "../types/apiTypes";
import { type chartsTypes } from "../types/chartsTypes";
import { type apiParams } from "../types/apiParams";

export default function apiQuery(params: apiParams) {
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
      if (params.query == "ardt") {
        url.searchParams.set(
          "where",
          `startswith(${params.select},"75")`
        );
      }
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
      let total75116: number = 0;
      let index75116: number = 0;
      const allTypesTotal = data.results.reduce(
        (sum: number, { total }: apiTypes) => sum + total, 0);
      
      const chartDatas: chartsTypes[] = data.results.map(function (apiDatas: apiTypes, index: number) {
        const select: string = params.select;
        if (params.query == "ardt") {
          if (apiDatas[select] == 75116) {
            // on évite de créer un point avec 75116 qu'on ajoutera à 75016
            // même si map crée quand même un index dans chartDatas
            // (qu'on retire une fois le map fini grace à cet index gardé en mémoire)
            total75116 = apiDatas.total;
            index75116 = index;
          } else {
            const chartPoint: chartsTypes = {
              xAxe: apiDatas[select],
              "Nombre de tournages": apiDatas.total,
            };
            return chartPoint;
          }
        } else {
          const chartPoint: chartsTypes = {
            xAxe: apiDatas[select],
            "Nombre de tournages": apiDatas.total,
          };
          if (params.query == "years") {
            chartPoint.xAxe = apiDatas.year;
          }
          if (params.query == "types") {
            chartPoint["Poucentage de tournages"] = Math.round(
              (apiDatas.total * 100) / allTypesTotal
            );
          }
          return chartPoint;
        }
      });
      if (params.query == "ardt") {
        // on enlève l'index en trop de chartDatas
        chartDatas.splice(index75116, 1);
        // 
        chartDatas.map(function (chartPoint: chartsTypes) {
          if (chartPoint.xAxe) {
            if (chartPoint.xAxe == 75016) {
              chartPoint["Nombre de tournages"] += total75116;
            } 
           }
        });
      }
      return chartDatas;
    },
  });
}
