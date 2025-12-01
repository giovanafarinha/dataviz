export interface chartsTypes {
  year?: number;
  type?: string;
  "Nombre de tournages": number;
  "Poucentage de tournages"?: number;
}

export interface chartsDatabase {
  graphDatas: chartsTypes[];
}