import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import EditPackageModal from '../Modals/editPackageModal';
const generateColumns = (data, openEditModal) => {
  if (!data || data.length === 0) return [];

  const columns = Object.keys(data[0])
    .map((key) => {
      if (key === 'id') return null;

      return {
        name: (
          <div className="w-44 text-center">
            <h1>{formatColumnName(key)}</h1>
          </div>
        ),
        selector: (row) => row[key],
        sortable: key !== 'action',
        cell: (row) => (
          <div className="w-full">
            {key === 'status' ? (
              <div
                className={`p-2 px-5 text-center rounded-lg ${
                  row[key] === 'Available' ? 'bg-green-400' : 'bg-red-500'
                }`}
              >
                {row[key]}
              </div>
            ) : key === 'price' ? (
              <h1 className="text-center">${row[key]}</h1>
            ) : key === 'productPhoto' ? (
              <div className="p-2 px-5 flex flex-row items-center gap-2">
                <div className="rounded-lg">
                  <img src={row[key]} alt="" width={100} />
                </div>
                {/* Your existing SVG code for the image preview */}
              </div>
            ) : (
              <h1 className="w-full text-center">{row[key]}</h1>
            )}
          </div>
        ),
      };
    })
    .filter((column) => column != null);

  columns.push({
    name: (
      <div className="w-56 text-center">
        <h1>Actions</h1>
      </div>
    ),
    cell: (row) => (
      <div
        className="p-2 w-full text-center px-5 bg-transparent border rounded-lg cursor-pointer"
        onClick={() => openEditModal(row)}
      >
        Edit
      </div>
    ),
  });

  return columns;
};

const formatColumnName = (name) => {
  return name
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/([A-Z])/g, ' $1') // Add a space before uppercase letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
    .trim(); // Trim any extra spaces
};

const PackagesDataTable = ({ dataEntered, selectedType }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filteredData, setFilteredData] = useState(dataEntered);
  const openEditModal = (row) => {
    setSelectedRowData(row);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedRowData(null);
  };

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#323D4E', // Header background color
        color: '#FFFFFF', // Header text color
        fontWeight: 'bold', // Header text weight
        fontSize: '20px',
        display: isEditModalOpen ? 'none' : '', // Hide if modal is open
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

  useEffect(() => {
    console.log({ SELECTED: selectedType });
    if (dataEntered) {
      if (selectedType === 'all') {
        setFilteredData(dataEntered);
        return;
      }
      const filtered = dataEntered?.filter(
        (item) => item.package_type === selectedType
      );
      setFilteredData(filtered);
    }
  }, [selectedType, dataEntered]);

  const desiredOrder = [
    'id',
    'package_name',
    'description',
    'scents_number',
    'price',
    'package_type',
  ];

  dataEntered = dataEntered?.map((item) => {
    return desiredOrder.reduce((acc, key) => {
      acc[key] = item[key];
      return acc;
    }, {});
  });

  const columns = generateColumns(dataEntered, openEditModal);
  return (
    <>
      <EditPackageModal
        isOpenModal={isEditModalOpen}
        closeModal={closeEditModal}
        data={selectedRowData}
      ></EditPackageModal>

      <div style={{ overflowX: 'auto' }}>
        <DataTable
          customStyles={customStyles}
          columns={columns}
          data={filteredData}
          fixedHeader
          highlightOnHover
          pointerOnHover
        />
      </div>
    </>
  );
};

export default PackagesDataTable;
