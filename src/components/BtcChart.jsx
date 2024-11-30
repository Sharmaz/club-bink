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
          stroke="#8884d8"
          dot={false}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis
          dataKey="date"
          angle={-35}
          textAnchor="end"
          height={200}
        />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default BtcChart;
