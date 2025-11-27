import { useQuery } from "@tanstack/react-query";
import { fetchTotalCount } from "./apiQuery";

export function useYearCounts(start: number, end: number) {
  return useQuery({
    queryKey: ["year-counts-parallel"],
    queryFn: async () => {
      const years = Array.from({ length: end - start + 1 }, (_, i) => start + i);

      const results = await Promise.all(
        years.map((y) => fetchTotalCount(y))
      );

      return Object.fromEntries(years.map((y, i) => [y, results[i]]));
    },
  });
}