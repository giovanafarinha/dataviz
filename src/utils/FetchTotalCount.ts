export default async function FetchTotalCount(year: number): Promise<number> {

  const url = new URL("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records");
  url.searchParams.set("where", `annee_tournage = date'${year}'`);

  const response = await fetch(url.toString());
  if (!response.ok) throw new Error("API error");

  const data = await response.json();
  return data.total_count;
}