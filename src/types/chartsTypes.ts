export interface chartsTypes {
  [key: string]: string | number;
  xAxe: string | number;
  "Nombre de tournages": number;
}

export interface chartsDatabase {
  chartDatas: chartsTypes[];
}