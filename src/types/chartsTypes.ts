export interface chartsTypes {
  [key: string]: number | string;
  xAxe: string | number;
  "Nombre de tournages": number;
}

export interface chartsDatabase {
  chartDatas: chartsTypes[];
}