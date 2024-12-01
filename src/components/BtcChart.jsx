import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import btcData from '../btc_data.json';

function BtcChart() {
  return (
    <div className="chart-container mt-8 mx-4 bg-[#27272C] flex flex-col items-center justify-center rounded-3xl p-6">
      <h2 className="my-4 text-5xl">Bitcoin - USD</h2>
      <LineChart
        width={800}
        height={600}
        data={localStorage.getItem('btcData') ? JSON.parse(localStorage.getItem('btcData')) : btcData}
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
        <XAxis
          dataKey="date"
          angle={-35}
          textAnchor="end"
          height={80}
          tick={{ stroke: '#FFFFFF', strokeWidth: 1 }}
          stroke="#324B55"
        />
        <YAxis
          tick={{ stroke: '#FFFFFF', strokeWidth: 1 }}
          stroke="#324B55"
        />
        <Tooltip contentStyle={{ backgroundColor: '#27272C' }} />
      </LineChart>
    </div>
  );
}

export default BtcChart;
