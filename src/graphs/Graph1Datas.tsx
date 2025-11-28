import YearsCounts from "../utils/YearsCounts";
import Graph1Display from "./Graph1Display";

export default function Graph1Datas() {
  const { isPending, error, data } = YearsCounts(2019, 2024);

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
      <Graph1Display graphDatas={data} />
  );
}