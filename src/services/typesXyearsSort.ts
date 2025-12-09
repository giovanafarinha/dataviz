import { type chartsTypes, type chartModel } from "../types/chartsTypes";

export default function typesXyearsSort(chartDatas: chartsTypes[]) {
    // on crée un modèle de point avec toutes les propriétés attendues
    const pointModel: chartModel = {
        xAxe: 0,
    };
    // on cherche tous les types pour les ajouter au modèle
    chartDatas.map(function (chartPoint) {
        const tempType = chartPoint.type_tournage;
        // on rajoute le type de tournage aux propriétés du modèle s'il n'y est pas déjà
        if (!pointModel.hasOwnProperty(tempType)) {
            pointModel[tempType] = 0;
        }
    });

    // tableau finalisé des données
    const chartDatasFinal: chartsTypes[] = [];
    chartDatas.forEach((chartPoint => {
        // on classe les données par année
        const existVerif = chartDatasFinal.find(point => point.xAxe === chartPoint.xAxe);
        // si elle existe on ajoute le nombre de tournage
        if (existVerif !== undefined) {
            existVerif[chartPoint.type_tournage] = chartPoint["Nombre de tournages"];
        // sinon on crée le point
        } else {
            // attention à utiliser assign et pas create pour que le modèle ne soit pas modifié
            const newPoint = Object.assign({}, pointModel);
            newPoint.xAxe = chartPoint.xAxe as number;
            newPoint[chartPoint.type_tournage] = chartPoint["Nombre de tournages"];
            chartDatasFinal.push(newPoint as chartsTypes);
        }
    }));
    // on vide chartDatas
    chartDatas.splice(0, chartDatas.length);
    // on le remplit avec la liste optimisée
    chartDatasFinal.map((typesXyears) => {
      chartDatas.push(typesXyears);
    });
}