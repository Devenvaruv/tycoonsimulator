import React from 'react';
import { useTable } from 'react-table';

const PropertiesTable = () => {
  // Example data
  const data = React.useMemo(
    () => [
      {
        zipCode: '78701',
        type: 'Condo',
        price: '$300,000',
        demandLevel: 'High',
        estimatedRevenue: '$40,000',
      },
      {
        zipCode: '78704',
        type: 'Single Family',
        price: '$450,000',
        demandLevel: 'Medium',
        estimatedRevenue: '$50,000',
      },
      {
        zipCode: '78701',
        type: 'Condo',
        price: '$300,000',
        demandLevel: 'High',
        estimatedRevenue: '$40,000',
      },
      {
        zipCode: '78704',
        type: 'Single Family',
        price: '$450,000',
        demandLevel: 'Medium',
        estimatedRevenue: '$50,000',
      },
      {
        zipCode: '78702',
        type: 'Apartment',
        price: '$350,000',
        demandLevel: 'Low',
        estimatedRevenue: '$30,000',
      },
      {
        zipCode: '78703',
        type: 'Duplex',
        price: '$500,000',
        demandLevel: 'High',
        estimatedRevenue: '$60,000',
      },
      {
        zipCode: '78705',
        type: 'Townhouse',
        price: '$400,000',
        demandLevel: 'Medium',
        estimatedRevenue: '$45,000',
      },
      {
        zipCode: '78745',
        type: 'Studio',
        price: '$250,000',
        demandLevel: 'High',
        estimatedRevenue: '$35,000',
      },
      {
        zipCode: '78759',
        type: 'Ranch',
        price: '$800,000',
        demandLevel: 'Low',
        estimatedRevenue: '$70,000',
      },
      {
        zipCode: '78723',
        type: 'Villa',
        price: '$750,000',
        demandLevel: 'Medium',
        estimatedRevenue: '$65,000',
      },
      {
        zipCode: '78741',
        type: 'Loft',
        price: '$280,000',
        demandLevel: 'High',
        estimatedRevenue: '$38,000',
      },
      {
        zipCode: '78751',
        type: 'Cottage',
        price: '$320,000',
        demandLevel: 'Low',
        estimatedRevenue: '$25,000',
      },
      // Add more properties as required
    ],
    []
  );

  // Define table columns
  const columns = React.useMemo(
    () => [
      {
        Header: 'ZIP Code',
        accessor: 'zipCode', // accessor is the "key" in the data
      },
      {
        Header: 'Property Type',
        accessor: 'type',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Demand Level',
        accessor: 'demandLevel',
      },
      {
        Header: 'Est. Revenue',
        accessor: 'estimatedRevenue',
      },
    ],
    []
  );

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  // Render the UI for your table
  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default PropertiesTable;
