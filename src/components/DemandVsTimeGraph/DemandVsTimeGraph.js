import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DemandVsTimeGraph = () => {
  // Sample data
  const data = [
    { time: 'Jan', demand: 400 },
    { time: 'Feb', demand: 300 },
    { time: 'Mar', demand: 200 },
    { time: 'Apr', demand: 278 },
    { time: 'May', demand: 189 },
    { time: 'Jun', demand: 239 },
    { time: 'Jul', demand: 349 },
    { time: 'Aug', demand: 200 },
    { time: 'Sep', demand: 300 },
    { time: 'Oct', demand: 400 },
    { time: 'Nov', demand: 500 },
    { time: 'Dec', demand: 700 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="demand" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DemandVsTimeGraph;
