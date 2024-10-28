import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const generateColumns = (data, editProduct) => {
  if (!data || data.length === 0) return [];

  return Object.keys(data[0]).map((key) => {
    return {
      name: (
        <div className=" w-56 text-center">
          <h1>{formatColumnName(key)}</h1>
        </div>
      ),
      selector: (row) => row[key],
      sortable: true,
      cell: (row) => (
        <div className="w-full">
          {key === 'amount' ? (
            <h1 className="text-center">{row[key]}</h1>
          ) : key === 'status' ? (
            <div
              className={`p-2 px-5 text-center rounded-lg ${
                row[key] === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'
              }`}
            >
              {row[key]}
            </div>
          ) : (
            <h1 className="w-full text-center">{row[key]}</h1>
          )}
        </div>
      ),
    };
  });
};

const formatColumnName = (name) => {
  return name
    .replace(/([A-Z])/g, ` $1`)
    .replace(/^./, (str) => str.toUpperCase());
};

const OrdersDataTable = ({ dataEntered, editProduct }) => {
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#323D4E', // Header background color
        color: '#FFFFFF', // Header text color
        fontWeight: 'bold', // Header text weight
        fontSize: '20px',
      },
    },
    rows: {
      style: {
        color: '#FFFFFF', // Default row text color
        backgroundColor: 'black', // Default row background color
        borderBottom: '1px solid white',
      },
    },
    cells: {
      style: {
        padding: '12px', // Cell padding
        fontSize: '20px',
      },
    },
  };

  const columns = generateColumns(dataEntered, editProduct);
  return (
    <>
      <div style={{ overflowX: 'auto' }}>
        <DataTable
          customStyles={customStyles}
          columns={columns}
          data={dataEntered}
          fixedHeader
          highlightOnHover
          pointerOnHover
        />
      </div>
    </>
  );
};

export default OrdersDataTable;
