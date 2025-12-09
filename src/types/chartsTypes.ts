export interface chartsTypes {
  [key: string]: string | number;
  xAxe: string | number;
  "Shooting count": number;
}

export interface chartsDatabase {
  chartDatas: chartsTypes[];
}

export interface chartModel {
  [key: string | number]: number;
  xAxe: number;
}