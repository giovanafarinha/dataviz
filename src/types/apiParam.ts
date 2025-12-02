export type apiParam =
  | { query: "years"; select: string; startYear: number; endYear: number }
  | { query: "types"; select: string }


export interface apiParamAll {
  [key: string]: apiParam[];
}
