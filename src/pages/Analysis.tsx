import chartChoices from "../services/chartChoices";
import Charts from "../charts/Charts";

export default function Analysis() {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-15 m-5 -mb-5 "> Analyse des tournages à Paris</h1>
      <span className="m-15 grid grid-cols-2 gap-10 border-1 px-5 py-5 border-black rounded-lg">
        {chartChoices.map((choice, index) => (
          <Charts key={index} chosenChart={choice} />
        ))}
      </span>
    </>
  );
}
