import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Dummy data for the chart
const data = [
  { month: 'Jan', revenue: 4000, cost: 2400 },
  { month: 'Feb', revenue: 3000, cost: 1398 },
  { month: 'Mar', revenue: 2000, cost: 9800 },
  { month: 'Apr', revenue: 2780, cost: 3908 },
  { month: 'May', revenue: 1890, cost: 4800 },
  { month: 'Jun', revenue: 2390, cost: 3800 },
  { month: 'Jul', revenue: 3490, cost: 4300 },
  // ...add more months as needed
];

const SimpleBarChart = () => (
  <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5, right: 30, left: 20, bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="revenue" fill="#8884d8" />
    <Bar dataKey="cost" fill="#82ca9d" />
  </BarChart>
);

export default SimpleBarChart;
