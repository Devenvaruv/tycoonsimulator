import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ReferenceArea, ResponsiveContainer } from 'recharts';

const DemandVsTimeGraph = ({ userData, maxRent, maxYaxis}) => {

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
      data={userData}
        margin={{
          top: 30,
          right: 40,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis 
          domain={[0, maxYaxis]}  // Set the min and max values for the Y-axis
          allowDataOverflow={true}  // Allows the graph to adjust to data outside of the domain range
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="userRent" stroke="#19A000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="compRent" stroke="#FF0000" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="avgRent" stroke="#000000" activeDot={{ r: 8 }} />
       
        <ReferenceArea y1={40} y2={maxRent} strokeOpacity={0.3} fill="green" fillOpacity={0.3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DemandVsTimeGraph;