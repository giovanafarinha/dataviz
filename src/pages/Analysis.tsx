import Charts from "../charts/Charts";
const chartChoices = ["line", "bar"];

export default function Analysis() {
  return (
    <>
      <h1> this is the the graphics</h1>
      {chartChoices.map((choices) => (
                <Charts chosenChart={choices} />
              ))
          }
    </>
  )
}
