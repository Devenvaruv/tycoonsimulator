import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const demandLevels = {
  100000: 'HIGHEST',
  75000: 'HIGH',
  50000: 'MEDIUM',
  25000: 'LOW',
  0: 'LOWEST'
};

const CustomYAxisTick = ({ y, payload }) => {
  const level = demandLevels[payload.value];
  return (
    <g transform={`translate(${0},${y})`}>
      <text x={0} y={0} dy={-4} textAnchor="right" fill="#666">
        {level ? level : payload.value}
      </text>
    </g>
  );
};

const DemandVsTimeGraph = ({ data }) => { // Accept data as a prop
  // The data prop will be used directly in the LineChart component
  const tickValues = [0, 25000, 50000, 75000, 100000];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 30,
          right: 40,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis tick={<CustomYAxisTick />} ticks={tickValues} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="demand" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DemandVsTimeGraph;
