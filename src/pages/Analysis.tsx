import chartChoices from "../services/chartChoices";
import Charts from "../charts/Charts";

export default function Analysis() {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-15 m-5 -mb-5 ">
        Analysis of shooting in Paris
      </h1>
      <span className="m-15 grid grid-cols-2 gap-10">
        {chartChoices.map((choice, index) => (
          <Charts key={index} chosenChart={choice} />
        ))}
      </span>
    </>
  );
}
