import { useQuery } from "@tanstack/react-query";
import FetchTotalCount from "./FetchTotalCount";

export default function YearsCounts(startYear: number, endYear: number) {
  return useQuery({
    queryKey: ["years-count"],
    queryFn: async () => {
      const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

      const results = await Promise.all(
        years.map((year) => FetchTotalCount(year))
      );
      const graphYearsCount: {year: number, "Nombre de tournages": number}[]= new Array;
      years.map((year, i) => graphYearsCount.push({"year": year, "Nombre de tournages": results[i]}));
      return graphYearsCount;
    },
  });
}