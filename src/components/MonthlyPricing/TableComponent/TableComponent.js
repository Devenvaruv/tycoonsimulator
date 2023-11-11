import React from 'react';
import './TableComponent.css';
// TableData.js
const fakeData = [
  { id: 1, name: 'Property 1', location: 'Downtown', price: '500,000', rented: 'Yes' },
  { id: 2, name: 'Property 2', location: 'Uptown', price: '350,000', rented: 'No' },
  { id: 3, name: 'Property 3', location: 'Suburb', price: '300,000', rented: 'No' },
  { id: 4, name: 'Property 4', location: 'Riverside', price: '450,000', rented: 'Yes' },
  // ... add more fake data as needed
];

const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Price</th>
          <th>Rented</th>
        </tr>
      </thead>
      <tbody>
        {fakeData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.price}</td>
            <td>{item.rented}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
