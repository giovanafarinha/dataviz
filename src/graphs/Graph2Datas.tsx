import TypesCounts from "../utils/TypesCounts";
import Graph2Display from "./Graph2Display";

export default function Graph2Datas() {
  const { isPending, error, data } = TypesCounts();

  if (isPending) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <>
      <Graph2Display graphDatas={data} choiceDisplay="" />
      <Graph2Display graphDatas={data} choiceDisplay="percent" />
    </>
  );
}