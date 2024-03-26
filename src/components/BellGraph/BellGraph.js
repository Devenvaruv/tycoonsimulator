import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BellGraph = () => {
    const [userValue, setUserValue] = useState(42); // Example user value
    const [expectedValue, setExpectedValue] = useState(50); // Example expected value
    const [fluctuation, setFluctuation] = useState(10); // Example fluctuation

    // Function to generate bell curve data, normalizing peak to 100%
    const generateBellCurveData = (expectedValue, userValue, fluctuation) => {
        const data = [];
        const labels = [];
        const highlight = [];
        const start = expectedValue - 3 * fluctuation;
        const end = expectedValue + 3 * fluctuation;
        let peakY = 0;

        // First pass to find peak y-value
        for (let x = start; x <= end; x++) {
            const variance = Math.pow(fluctuation, 2);
            const y = (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(-0.5 * Math.pow((x - expectedValue) / Math.sqrt(variance), 2));
            if (y > peakY) peakY = y;
        }

        // Second pass to normalize based on peak
        for (let x = start; x <= end; x++) {
            labels.push(x);
            const variance = Math.pow(fluctuation, 2);
            let y = (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(-0.5 * Math.pow((x - expectedValue) / Math.sqrt(variance), 2));
            y = (y / peakY) * 100; // Normalize peak to 100%
            data.push(y);

            // Highlight user value
            if (x === userValue) {
                highlight.push(y);
            } else {
                highlight.push(null);
            }
        }

        return {
            labels,
            datasets: [
                { label: 'Bell Curve', data, borderColor: 'rgb(75, 192, 192)', tension: 0.1 },
                { label: 'User Value', data: highlight, borderColor: 'rgb(255, 99, 132)', pointBackgroundColor: 'rgb(255, 99, 132)', pointRadius: 5, tension: 0.1, fill: false, showLine: false }
            ]
        };
    };

    const data = generateBellCurveData(expectedValue, userValue, fluctuation);

    const options = {
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Demand (%)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    },
                    min: 0,
                    max: 100,
                }
            }
        }
    };

    const handleUserValueChange = (event) => {
        setUserValue(parseInt(event.target.value));
    };

    const handleExpectedValueChange = (event) => {
        setExpectedValue(parseInt(event.target.value));
    };

    const handleFluctuationChange = (event) => {
        setFluctuation(parseInt(event.target.value));
    };

    return (
        <div>
            <label>User Value: <input type="number" value={userValue} onChange={handleUserValueChange} /></label>
            <label>Expected Value: <input type="number" value={expectedValue} onChange={handleExpectedValueChange} /></label>
            <label>Fluctuation: <input type="number" value={fluctuation} onChange={handleFluctuationChange} /></label>
            <Line data={data} options={options} />
        </div>
    );
};

export default BellGraph;