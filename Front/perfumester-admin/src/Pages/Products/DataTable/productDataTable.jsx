import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import EditProductModal from '../Modals/EditProductModal';

const generateColumns = (data, editProduct) => {
  if (!data || data.length === 0) return [];
  const localhost = 'http://localhost:3001/';
  console.log(data);
  return Object.keys(data[0])
    .map((key) => {
      if (key === 'id') return null;

      return {
        name:
          key === 'description' ? (
            <div className=" text-center">
              <h1>{formatColumnName(key)}</h1>
            </div>
          ) : key === 'subscriptionCategory' ? (
            <div className="w-72">
              <h1>{formatColumnName(key)}</h1>
            </div>
          ) : (
            <div className=" w-44 text-center">
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
            ) : key === 'image' ? (
              <div className="p-2 px-5 flex flex-row items-center gap-2">
                <div className="max-h-64 max-w-40 rounded-lg">
                  <img
                    src={localhost + row[key]}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="border p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    className="fill-white hover:fill-black transition-colors duration-300 ease-in-out"
                  >
                    <path
                      d="M16.25 5.17456H14.0008L12.8906 3.50815C12.8477 3.44389 12.7896 3.39121 12.7215 3.35482C12.6533 3.31843 12.5773 3.29945 12.5 3.29956H7.5C7.42274 3.29945 7.34665 3.31843 7.2785 3.35482C7.21035 3.39121 7.15225 3.44389 7.10938 3.50815L5.99844 5.17456H3.75C3.29416 5.17456 2.85699 5.35564 2.53466 5.67797C2.21233 6.0003 2.03125 6.43747 2.03125 6.89331V15.6433C2.03125 16.0992 2.21233 16.5363 2.53466 16.8587C2.85699 17.181 3.29416 17.3621 3.75 17.3621H16.25C16.7058 17.3621 17.143 17.181 17.4653 16.8587C17.7877 16.5363 17.9688 16.0992 17.9688 15.6433V6.89331C17.9688 6.43747 17.7877 6.0003 17.4653 5.67797C17.143 5.35564 16.7058 5.17456 16.25 5.17456ZM17.0312 15.6433C17.0312 15.8505 16.9489 16.0492 16.8024 16.1957C16.6559 16.3423 16.4572 16.4246 16.25 16.4246H3.75C3.5428 16.4246 3.34409 16.3423 3.19757 16.1957C3.05106 16.0492 2.96875 15.8505 2.96875 15.6433V6.89331C2.96875 6.68611 3.05106 6.4874 3.19757 6.34088C3.34409 6.19437 3.5428 6.11206 3.75 6.11206H6.25C6.32726 6.11218 6.40335 6.09319 6.4715 6.0568C6.53965 6.02041 6.59775 5.96774 6.64062 5.90347L7.75078 4.23706H12.2484L13.3594 5.90347C13.4023 5.96774 13.4604 6.02041 13.5285 6.0568C13.5967 6.09319 13.6727 6.11218 13.75 6.11206H16.25C16.4572 6.11206 16.6559 6.19437 16.8024 6.34088C16.9489 6.4874 17.0312 6.68611 17.0312 6.89331V15.6433ZM10 7.67456C9.35103 7.67456 8.71663 7.867 8.17704 8.22755C7.63744 8.5881 7.21687 9.10056 6.96852 9.70013C6.72017 10.2997 6.65519 10.9595 6.7818 11.596C6.90841 12.2325 7.22091 12.8171 7.67981 13.276C8.1387 13.7349 8.72336 14.0474 9.35986 14.174C9.99636 14.3006 10.6561 14.2356 11.2557 13.9873C11.8553 13.7389 12.3677 13.3184 12.7283 12.7788C13.0888 12.2392 13.2812 11.6048 13.2812 10.9558C13.2812 10.0856 12.9355 9.25097 12.3202 8.63562C11.7048 8.02026 10.8702 7.67456 10 7.67456ZM10 13.2996C9.53645 13.2996 9.08331 13.1621 8.69788 12.9046C8.31245 12.647 8.01205 12.281 7.83466 11.8527C7.65726 11.4245 7.61085 10.9532 7.70128 10.4986C7.79172 10.0439 8.01494 9.62631 8.34272 9.29853C8.6705 8.97075 9.08811 8.74753 9.54276 8.6571C9.9974 8.56666 10.4686 8.61308 10.8969 8.79047C11.3252 8.96786 11.6912 9.26827 11.9488 9.65369C12.2063 10.0391 12.3438 10.4923 12.3438 10.9558C12.3438 11.5774 12.0968 12.1736 11.6573 12.6131C11.2177 13.0526 10.6216 13.2996 10 13.2996Z"
                      className="fill-white hover:fill-black transition-colors duration-300 ease-in-out"
                    />
                  </svg>
                </div>
              </div>
            ) : key === 'description' ? (
              <div>
                <h1 className="w-full text-center">
                  {row[key].slice(0, 20) + ' ....'}
                </h1>
              </div>
            ) : (
              <h1 className="w-full text-center">{row[key]}</h1>
            )}
          </div>
        ),
      };
    })
    .filter((column) => column != null);
};

const formatColumnName = (name) => {
  return name
    .replace(/([A-Z])/g, ` $1`)
    .replace(/^./, (str) => str.toUpperCase());
};

const ReactDataTable = ({ dataEntered, editProduct }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = (row) => {
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
        fontSize: '20px',
      },
    },
  };

  const desiredOrder = [
    'id',
    'image',
    'name',
    'description',
    'subscriptionCategory',
    'category',
    'price',
    'status',
  ];
  dataEntered = dataEntered.map((item) => {
    return desiredOrder.reduce((acc, key) => {
      acc[key] = item[key];
      return acc;
    }, {});
  });
  const columns = generateColumns(dataEntered, editProduct);
  return (
    <>
      <EditProductModal
        isOpenModal={isEditModalOpen}
        closeModal={closeEditModal}
        data={selectedRowData}
      ></EditProductModal>

      <div style={{ overflowX: 'auto' }}>
        <DataTable
          customStyles={customStyles}
          columns={columns}
          data={dataEntered}
          fixedHeader
          highlightOnHover
          pointerOnHover
          onRowClicked={handleRowClick}
        />
      </div>
    </>
  );
};

export default ReactDataTable;
