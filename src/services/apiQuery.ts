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
          `startswith(${params.select},"75") AND ${params.select} is not null`
        );
      }
      if (params.query == "years") {
        url.searchParams.set(
          "where",
          `${params.select} >=  ${params.startYear} AND ${params.select} <= ${params.endYear}`
        );
      }
      if (params.query == "filmmakers") {
        url.searchParams.set(
          "where",
          `${params.select} is not null`
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
        if (chartDatas[75016] && chartDatas[75116]) {
          // on enlève l'index en trop de chartDatas
          chartDatas.splice(index75116, 1);
          // on cumule les totaux du 16ème arrondissement
          chartDatas[75016]["Nombre de tournages"] = total75116;
        }
      }
      if (params.query == "filmmakers") {
        // on évite le message d'erreur : "Variable is used before being assigned"
        // avec ! après le nom de variable pour que TypeScript ne la considère pas undefined ou null
        let chartDatasFinal!: {[key: string]: number};
        chartDatas.map(function (chartPoint: chartsTypes) {
          // on élimine les entrées qui ne contiennent pas des lettres
          if (Number.isNaN(chartPoint.xAxe)) {
            // on transforme le nom du réalisateur en minuscules sans accents
            let nameCompare: string = chartPoint.xAxe as string;
            nameCompare.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            // on met le premier caractère en majuscule
            nameCompare = nameCompare.charAt(0).toUpperCase() + nameCompare.slice(1)
            // on comptabilise le nombre de tournage pour ce réalisateur
            if (chartDatasFinal[nameCompare]) {
              chartDatasFinal[nameCompare] += chartPoint["Nombre de tournages"];
            } else {
              chartDatasFinal[nameCompare] = chartPoint["Nombre de tournages"];
            }
          }
        });

        // on vide chartDatas
        // chartDatas.splice(0, chartDatas.length)
        // on le remplit avec seulement les 10 réalisateurs qui ont le plus de tournages
      }
      
      return chartDatas;
    },
  });
}
