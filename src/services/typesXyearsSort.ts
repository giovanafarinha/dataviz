import { type chartsTypes, type chartModel } from "../types/chartsTypes";

export default function typesXyearsSort(chartDatas: chartsTypes[]) {
    // on traduit en anglais
    const translateShootings: {[key: string]:string} = {
        "Long métrage": "Movie",
        "Série TV": "TV Series",
        "Série Web": "Web Series",
        "Téléfilm": "TV movie"
    };

    // on crée un modèle de point avec toutes les propriétés attendues
    const pointModel: chartModel = {
        xAxe: 0,
    };
    // on cherche tous les types pour les ajouter au modèle
    chartDatas.map(function (chartPoint) {
        let translatedShooting = chartPoint.type_tournage;
        translatedShooting = (translateShootings[translatedShooting]) ? translateShootings[translatedShooting] : translatedShooting;
        // on rajoute le type de tournage aux propriétés du modèle s'il n'y est pas déjà
        if (!pointModel.hasOwnProperty(translatedShooting)) {
            pointModel[translatedShooting] = 0;
        }
    });

    // tableau finalisé des données
    const chartDatasFinal: chartsTypes[] = [];
    chartDatas.forEach((chartPoint => {
        // on classe les données par année
        const existVerif = chartDatasFinal.find(point => point.xAxe === chartPoint.xAxe);
        // on traduit en anglais
        let translatedShooting = chartPoint.type_tournage as string;
        translatedShooting = (translateShootings[translatedShooting]) ? translateShootings[translatedShooting] : translatedShooting;
        // si elle existe on ajoute le nombre de tournage
        if (existVerif !== undefined) {
            existVerif[translatedShooting] = chartPoint["Shooting count"];
        // sinon on crée le point
        } else {
            // attention à utiliser assign et pas create pour que le modèle ne soit pas modifié
            const newPoint = Object.assign({}, pointModel);
            newPoint.xAxe = chartPoint.xAxe as number;
            newPoint[translatedShooting] = chartPoint["Shooting count"];
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