import React from 'react';
import './PriceTable.css'
function PriceTable() {
  const data = [
    {
      zipCode: '78701',
      highestPrice: '$19,286.00',
      lowestPrice: '$19.00',
      averagePrice: '$400.68',
      standardDeviation: '$1,231.73'
    },
    {
      zipCode: '78705',
      highestPrice: '$5,000.00',
      lowestPrice: '$15.00',
      averagePrice: '$219.30',
      standardDeviation: '$360.97'
    },
    {
      zipCode: '78746',
      highestPrice: '$5,437.00',
      lowestPrice: '$41.00',
      averagePrice: '$739.00',
      standardDeviation: '$929.83'
    }
  ];

    return (
        <div className="responsive-price-table-container">
            <table className="responsive-price-table">
                <thead>
                    <tr>
                        <th>Zip Code</th>
                        <th>Highest Price</th>
                        <th>Lowest Price</th>
                        <th>Average Price</th>
                        <th>Standard Deviation</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.zipCode}</td>
                            <td>{row.highestPrice}</td>
                            <td>{row.lowestPrice}</td>
                            <td>{row.averagePrice}</td>
                            <td>{row.standardDeviation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PriceTable;
