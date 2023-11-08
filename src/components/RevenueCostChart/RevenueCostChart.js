import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const RevenueCostChart = ({ revenue, cost }) => {
  // Create chart data
  const chartData = {
    labels: ['Revenue', 'Cost'],
    datasets: [
      {
        label: 'USD',
        data: [revenue, cost],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false // This will hide the legend
      }
    }
  };

  // Render the bar chart
  return (
    <Bar data={chartData} options={options} />
  );
};

export default RevenueCostChart;
