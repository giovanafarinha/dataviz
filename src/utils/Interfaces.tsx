export interface TypeGraph {
  year?: number;
  type?: string;
  "Nombre de tournages"?: number;
  "Poucentage de tournages"?: number;
};

export interface GraphDatabase {
  graphDatas: TypeGraph[];
};

export interface TypeDatasAPI {
  annee_tournage?: number;
  type_tournage?: string;
  total: number;
};