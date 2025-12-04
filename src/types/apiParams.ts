export type apiParams =
  | { query: "years"; select: string; startYear: number; endYear: number }
  | { query: "types"; select: string } 
  | { query: "ardt"; select: string }

export interface chartProps {
  key: number | string;
  chosenChart: apiParams;
}