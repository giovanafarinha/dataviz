import Charts from "../charts/Charts";
import { type apiParamAll } from "../types/apiParam";

// const chartChoices = ["years", "types"];
const chartChoices: any = [
    { query: "years", select: "annee_tournage", startYear: 2016, endYear: 2024 },
    { query: "types", select: "type_tournage" }
  ];

export default function Analysis() {
  return (
    <>
      <h1> this is the the graphics</h1>
      {chartChoices.map((choice: any, index: any) => (
                <Charts key={index} chosenChart={choice} />
              ))
          }
    </>
  )
}
