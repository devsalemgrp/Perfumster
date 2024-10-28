import DataTable from 'react-data-table-component';
import { useDispatch } from 'react-redux';
import { editOrderStatus } from '../../../Redux/Orders/OrdersActions';

const generateColumns = (data, handleStatusChange) => {
  if (!data || data.length === 0) return [];

  return Object.keys(data[0])
    .map((key) => {
      if (key.includes('id') || key === 'name') return null;

      return {
        name: (
          <div className=" w-36 text-center">
            <h1>{formatColumnName(key)}</h1>
          </div>
        ),
        selector: (row) => row[key],
        sortable: true,
        cell: (row) => (
          <div className="w-full">
            {key === 'amount' ? (
              <h1 className="text-center">$ {row[key]}</h1>
            ) : key === 'status' ? (
              <div
                className={`p-2 px-5 text-center flex items-center border  rounded-lg 
                    ${
                      row[key] === 'Delivered'
                        ? 'bg-green-400'
                        : row[key] === 'Pending'
                        ? 'bg-yellow-400'
                        : 'bg-red-500'
                    }`}
              >
                <select
                  value={row[key]}
                  onChange={(e) =>
                    handleStatusChange(row['id'], e.target.value)
                  }
                  name=""
                  id=""
                  className={`
                    w-full
                    outline-none
                    bg-transparent
                `}
                >
                  <option value="Delivered">Delivered</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            ) : key === 'image' ? (
              <div className="flex flex-row items-center gap-3">
                <img
                  src={'http://localhost:3001/' + row[key]}
                  alt=""
                  width={100}
                />
                <h1>{row['name']}</h1>
              </div>
            ) : key === 'date' ? (
              <h1 className="w-full text-center">
                {new Date(row[key]).toDateString()}
              </h1>
            ) : key === 'location' ? (
              <div className="w-full text-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    row[key]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline "
                >
                  {row[key]}
                </a>
              </div>
            ) : (
              <h1 className="w-full text-center">{row[key]}</h1>
            )}
          </div>
        ),
      };
    })
    .filter((element) => element != null);
};

const formatColumnName = (name) => {
  return name
    .replace(/([A-Z])/g, ` $1`)
    .replace(/^./, (str) => str.toUpperCase());
};

const LatestOrdersDataTable = ({ dataEntered, editProduct }) => {
  const dispatch = useDispatch();

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

  const desiredOrder = [
    'id',
    'image',
    'name',
    'person',
    'location',
    'date',
    'quantity',
    'amount',
    'status',
  ];
  dataEntered = dataEntered.map((item) => {
    return desiredOrder.reduce((acc, key) => {
      acc[key] = item[key];
      return acc;
    }, {});
  });

  const handleStatusChanged = (orderId, status) => {
    dispatch(editOrderStatus(orderId, status));
  };

  const columns = generateColumns(dataEntered, handleStatusChanged);
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

export default LatestOrdersDataTable;
