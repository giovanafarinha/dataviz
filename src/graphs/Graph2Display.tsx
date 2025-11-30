import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, type TooltipContentProps } from 'recharts';
import { type GraphDatabase } from "../utils/Interfaces";

export default function Graph2Display ({ graphDatas, choiceDisplay }: GraphDatabase) {
  const displayPercent = (choiceDisplay == "percent") ? true : false;
  const dataKeyBar = (displayPercent) ? "Poucentage de tournages" : "Nombre de tournages";
  const CustomTooltip = ({ active, payload, label }: TooltipContentProps<string | number, string>) => {
    const isVisible = active && payload && payload.length;
    return (
      <div className="p-3 text-center bg-white border-1 border-solid border-gray-300" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        {isVisible && (
          <>
            <p className="label">{label}</p>
            <p className="desc text-gray-950" style={{ display: !displayPercent ? 'inherit' : 'none' }}>{`${payload[0].value} tournages`}</p>
            <p className="desc text-gray-400" style={{ display: displayPercent ? 'inherit' : 'none' }}>{`${payload[0].value}%`}</p>
          </>
        )}
      </div>
    );
  };
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={graphDatas}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="type" />
      <YAxis width="auto" />
      <Tooltip content={CustomTooltip} />
      <Legend />
      <Bar dataKey={dataKeyBar} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
  );
};