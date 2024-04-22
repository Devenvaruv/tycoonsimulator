import React from "react";
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            {/* Header */}
            <h1 style={{color: '#00543C'}}>Contact Us</h1>
            <p>
                Thank you for visiting our website. If you have any questions, feedback, or need assistance, please feel free to reach out to us.
            </p>

            {/* General Inquiries or Support */}
            <p>For general inquiries or support:</p>
            
            <p>Email: <a href="mailto:tycoonsimusf@gmail.com">tycoonsimusf@gmail.com</a></p>

            {/* Services or Consultation */}
            <p>If you encounter any technical problems, kindly include a screenshot if you can.</p>
    
        </div>

    );
}

export default Contact;

// Function to generate normal distributed numbers
// Box-Muller transform
function randomNormalDistribution(mean, stdDev) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num * stdDev + mean; // Scale and shift
    return num;
}

// Function to simulate non-negative occupancy values
function simulateNonNegativeNormal(mean, std, size) {
    let samples = [];
    for (let i = 0; i < size; i++) {
        let sample = randomNormalDistribution(mean, std);
        while (sample < 0) {
            sample = randomNormalDistribution(mean, std);
        }
        samples.push(sample);
    }
    return samples;
}

// Provided distribution parameters for each zip code
const distributionParams = {
    '78705': { 'mean': 19.379661016949154, 'std': 38.06882607238051 },
    '78701': { 'mean': 16.176130895091433, 'std': 33.62916672640603 },
    '78746': { 'mean': 13.395437262357415, 'std': 23.94915991324636 },
};

// Number of weeks to simulate
const weeks = 16;

// Simulate occupancy_ltm for each zip code
let simulatedData = {};

for (const zipCode in distributionParams) {
    const params = distributionParams[zipCode];
    simulatedData[zipCode] = simulateNonNegativeNormal(params.mean, params.std, weeks);
}

// To mimic the DataFrame functionality for displaying data,
// you can simply log the simulatedData object to the console
console.log(simulatedData);

// If you need a more table-like display, consider using
// console.table() for arrays or third-party libraries for complex data structures

