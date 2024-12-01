import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import btcData from '../btc_data.json';

function BtcChart() {
  return (
    <div className="chart-container mt-12 flex flex-col items-center justify-center">
      <h2 className="my-4 text-2xl">Bitcoin - USD</h2>
      <LineChart
        width={800}
        height={600}
        data={btcData}
        margin={{
          top: 5,
          right: 20,
          bottom: 5,
          left: 0,
        }}
      >
        <Line
          type="monotone"
          dataKey="price"
          stroke="#FEA419"
          dot={false}
        />
        <CartesianGrid stroke="#1D1D23" strokeDasharray="5 5" />
        <XAxis
          dataKey="date"
          angle={-35}
          textAnchor="end"
          height={200}
          tick={{ stroke: '#F8FDFE', strokeWidth: 0.5 }}
        />
        <YAxis tick={{ stroke: '#F8FDFE', strokeWidth: 0.5 }} />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default BtcChart;
