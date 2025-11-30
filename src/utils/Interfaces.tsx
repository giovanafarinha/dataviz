export interface TypeGraph {
  year?: number;
  type?: string;
  "Nombre de tournages"?: number;
  "Poucentage de tournages"?: number;
};

export interface GraphDatabase {
  graphDatas: TypeGraph[];
  choiceDisplay?: string;

};

export interface TypeDatasAPI {
  type_tournage: string;
  total: number;
};