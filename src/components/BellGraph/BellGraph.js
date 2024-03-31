import React from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';

const BellGraph = ({ expectedValue, fluctation }) => {
  // Function to calculate the probability density for a given x
  const gaussian = (x, mean, standardDeviation) => {
    const gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
    const peakValue = gaussianConstant / standardDeviation; // Maximum value of the Gaussian function
    return (
      (gaussianConstant *
      (1 / standardDeviation) *
      Math.exp(-0.5 * Math.pow((x - mean) / standardDeviation, 2))) / peakValue
    ) * 100; // Normalize and scale to 100
  };

  // Generate data points for the bell curve
  let curveDataPoints = [];
  for (let x = expectedValue - 4 * fluctation; x <= expectedValue + 4 * fluctation; x += fluctation / 10) {
    curveDataPoints.push({ x: x, y: gaussian(x, expectedValue, fluctation) });
  }

  // Separate dataset for the user values to highlight them
  // const userValueDataPoint = [{
  //   x: userValue, 
  //   y: gaussian(userValue, expectedValue, fluctation)
  // }];

  // const userValue2DataPoint = [{
  //   x: userValue2,
  //   y: gaussian(userValue2, expectedValue, fluctation)
  // }];

  const data = {
    datasets: [
      {
        type: 'line', // This will render this dataset as a line
        label: 'Competitor Bell Curve',
        data: curveDataPoints,
        backgroundColor: 'rgba(0, 119, 204, 0.3)',
        borderColor: 'rgba(0, 119, 204, 1)', // Make the line blue
        borderWidth: 2, // Line thickness
        pointRadius: 0, // Hide the points on the line
        fill: true // Do not fill under the line
      },
      // {
      //   label: 'You',
      //   data: userValueDataPoint,
      //   pointRadius: 5,
      //   backgroundColor: 'red'
      // },
      // {
      //   label: 'Competitor ', // New data point for the additional user value
      //   data: userValue2DataPoint,
      //   pointRadius: 5,
      //   backgroundColor: 'green' // Set the color to green
      // }
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        beginAtZero: true,
        ticks: {
          // Update to display ticks as percentages
          callback: function(value) {
            if (value < 10) return "Low";
            
            if (value > 90) return "High";
          }
        },
        max: 100 // Ensure y-axis goes up to 100%
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        // Customize tooltip
        callbacks: {
          // Only show x-axis value
          title: function(tooltipItems) {
            try {
              const xValue = parseFloat(tooltipItems[0].raw.x);
              if (!isNaN(xValue)) {
                return `rent: ${xValue.toFixed(2)}`;
              } else {
                return 'Invalid Value'; // Placeholder for non-numeric values
              }
            } catch (error) {
              console.error("Error formatting tooltip title:", error);
              return 'Error'; // Placeholder in case of error
            }
          },
          label: function(tooltipItem) {
            return ''; // Don't show the default label
          }
        }
      },
      legend: {
        display: true,
        labels: {
          filter: function(legendItem, chartData) {
            // Assuming the Competitor Bell Curve is the first dataset,
            // you can adjust the index as necessary
            if (chartData.datasets[legendItem.datasetIndex].label === 'Competitor Bell Curve') {
              return false; // This will hide the Competitor Bell Curve from the legend
            }
            return true; // This will show all other datasets in the legend
          }
        }
      }
    },
  };

  return <Scatter data={data} options={options} />;
};

export default BellGraph;
