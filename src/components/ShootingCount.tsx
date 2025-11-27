import { useYearCounts } from "../utils/useCount";
// Utilisation dans un composant
export function ShootingCount() {
  const { data, isLoading } = useYearCounts(2019, 2024);

  if (isLoading) return <p>Chargement...</p>;

  return (
    <div>
      {Object.entries(data!).map(([year, count]) => (
        <div key={year}>
          {year}: {count}
        </div>
      ))}
    </div>
  );
}