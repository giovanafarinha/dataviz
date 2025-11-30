import { useQuery } from "@tanstack/react-query";
import FetchTotalCount from "./FetchTotalCount";
import { type TypeGraph } from "./Interfaces";

export default function YearsCounts(startYear: number, endYear: number) {
  return useQuery({
    queryKey: ["years-counts"],
    queryFn: async () => {
      const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

      const results = await Promise.all(
        years.map((year) => FetchTotalCount(year))
      );
      const graphDatas: TypeGraph[] = new Array;
      years.map((year, i) => graphDatas.push({"year": year, "Nombre de tournages": results[i]}));
      return graphDatas;
    },
  });
}