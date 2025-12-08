import { type apiParams } from "../types/apiParams";

const chartChoices: apiParams[] = [
  { query: "years", select: "annee_tournage", startYear: 2016, endYear: 2024 },
  { query: "types", select: "type_tournage" },
  { query: "typesXyears", select: "annee_tournage", startYear: 2016, endYear: 2024 },
  { query: "ardt", select: "ardt_lieu" },
  { query: "directors", select: "nom_realisateur" },
];

export default chartChoices;