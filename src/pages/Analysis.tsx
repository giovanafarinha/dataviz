import chartChoices from "../services/chartChoices";
import Charts from "../charts/Charts";

export default function Analysis() {
  return (
    <>
      <h1> this is the the graphics</h1>
      {chartChoices.map((choice, index) => (
        <Charts key={index} chosenChart={choice} />
      ))}
    </>
  );
}
