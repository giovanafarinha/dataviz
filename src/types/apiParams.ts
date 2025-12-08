export type apiParams =
  | { query: "years"; select: string; startYear: number; endYear: number }
  | { query: "types"; select: string }
  | { query: "typesXyears"; select: string; startYear: number; endYear: number }
  | { query: "ardt"; select: string }
  | { query: "directors"; select: string }

export interface chartProps {
  key: string | number;
  chosenChart: apiParams;
}