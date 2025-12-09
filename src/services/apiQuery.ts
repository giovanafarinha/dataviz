import { useQuery } from "@tanstack/react-query";
import typesXyearsSort from "./typesXyearsSort";
import directorsNames from "./directorsNames";
import type apiTypes from "../types/apiTypes";
import { type chartsTypes } from "../types/chartsTypes";
import { type apiParams } from "../types/apiParams";

export default function apiQuery(params: apiParams, moreWhere: string) {
  return useQuery({
    queryKey: ["api-datas", params],
    queryFn: async () => {
      // PREPARATION DE LA REQUETE
      // ------------------------------------------------------
      const url = new URL(
        "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
      );
      const addType = (params.query == "typesXyears") ? ", type_tournage" : "";
      let selectParam = `${params.select}`;
      if ((params.query == "years") || (params.query == "typesXyears")) {
        selectParam = `year(${params.select}) as year${addType}`;
      }
      url.searchParams.set(
        "select",
        `${selectParam}, count(${params.select}) as total`
      );
      url.searchParams.set(
        "group_by",
        params.select + addType
      );
      if (params.query == "ardt") {
        url.searchParams.set(
          "where",
          `startswith(${params.select},"75") AND ${params.select} is not null`
        );
      }
      if (params.query == "years") {
        moreWhere = (moreWhere !== "") ? ` AND type_tournage =  ${moreWhere}` : "";
        url.searchParams.set(
          "where",
          `${params.select} >=  ${params.startYear} AND ${params.select} <= ${params.endYear}${moreWhere}`
        );
      }
      if (params.query == "directors") {
        url.searchParams.set(
          "where",
          `${params.select} is not null`
        );
      }
      url.searchParams.set(
        "order_by",
        `${params.select}${addType} ASC`
      );

      // APPEL API ET RECUPERATION DES DONNEES
      // ------------------------------------------------------
      const response = await fetch(url.toString());
      if (!response.ok) throw new Error("API error");
      const data = await response.json();

      // MISE EN FORME DES DONNEES
      // ------------------------------------------------------
      // somme de tous les totaux pour créer des pourcentages
      const allTypesTotal = data.results.reduce(
        (sum: number, { total }: apiTypes) => sum + total, 0);
      // gestion du 16ème arrondissement divisé en 75016 et 75116
      let index75016: number = 0;
      let index75116: number = 0;
      let total75116: number = 0;
      // gestion des champs erronés de nom_realisateur
      const directorsIndexes: number[] = [];
      
      // création des points du futur tableau avec ses coordonnées x et y
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
            index75016 = (apiDatas[select] == 75016) ? index : index75016;
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
          if ((params.query == "years") || (params.query == "typesXyears")) {
            chartPoint.xAxe = apiDatas.year;
          }
          if (params.query == "types") {
            // ajout d'un champ pourcentage
            chartPoint["Poucentage de tournages"] = Math.round(
              (apiDatas.total * 100) / allTypesTotal
            );
          }
          if (params.query == "typesXyears") {
            chartPoint["type_tournage"] = apiDatas["type_tournage"];
          }
          if (params.query == "directors") {
            // on élimine les entrées vides ou ne contenant que des nombres
            let directorName = (typeof chartPoint.xAxe == "string") ? chartPoint.xAxe : "";
            directorName.trim();
            directorName = (isNaN(Number(directorName))) ? directorName : "";
            if (directorName != ""){
              chartPoint.xAxe = directorsNames(directorName);
            } else {
              directorsIndexes.push(index); 
            }
          }
          return chartPoint;
        }
      });
      if (params.query == "ardt") {
        // on enlève l'index en trop de chartDatas
        chartDatas.splice(index75116, 1);
        // on cumule les totaux du 16ème arrondissement
        chartDatas[index75016]["Nombre de tournages"] = total75116;
      }
      if (params.query == "typesXyears") {
        typesXyearsSort(chartDatas);
      }
      if (params.query == "directors") {
        // on enlève les indexes indésirables
        directorsIndexes.map((dIndex: number) => {
          chartDatas.splice(dIndex, 1);
        });

        // const chartDatasFinal: chartsTypes[] = directorsSort(chartDatas);
        // // on vide chartDatas
        // chartDatas.splice(0, chartDatas.length);
        // // on le remplit avec la liste optimisée
        // chartDatasFinal.map((directors) => {
        //   chartDatas.push(directors);
        // });


        const chartDatasFinal: {[key: string]: number} = {};
        chartDatas.map(function (chartPoint: chartsTypes) {
          // on comptabilise le nombre de tournage pour ce réalisateur
          if (chartDatasFinal[chartPoint.xAxe]) {
            chartDatasFinal[chartPoint.xAxe] += chartPoint["Nombre de tournages"];
          } else {
            chartDatasFinal[chartPoint.xAxe] = chartPoint["Nombre de tournages"];
          }
        });
        // on vide chartDatas
        chartDatas.splice(0, chartDatas.length);
        // on le remplit avec la liste nettoyée des réalisateurs
        Object.keys(chartDatasFinal).map((director) => {
          chartDatas.push({
            xAxe: director,
            "Nombre de tournages": chartDatasFinal[director],
          }
          )
        });
        // on trie la liste
        chartDatas.sort((a, b) => b["Nombre de tournages"] - a["Nombre de tournages"]);
        // on ne garde que les 10 réalisateurs qui ont le plus de tournages
        chartDatas.length = 10;
      }
      return chartDatas;
    },
  });
}
