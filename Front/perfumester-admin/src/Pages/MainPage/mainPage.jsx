import React, { useEffect } from 'react';
import SalesChart from '../../Components/SalesChart';
import ReactDataTable from '../../Components/ReactDataTable';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestOrders } from '../../Redux/Orders/OrdersActions';

const MainPage = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ordersReducer);

  useEffect(() => {
    dispatch(getLatestOrders());
  }, [dispatch]);
  return (
    <div className="w-full p-20">
      <h1 className="text-4xl mb-10">Main Page</h1>

      <div className="grid grid-cols-4 gap-2">
        <div className="bg-black p-5 rounded-lg">
          <h1 className="opacity-80">Total Subscribers</h1>
          <h3>546</h3>

          <div className="float-right p-2 rounded-md bg-[#D6951C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="25"
              viewBox="0 0 32 25"
              fill="none"
            >
              <path
                opacity="0.587821"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66667 5.83333C6.66667 8.77885 9.05449 11.1667 12 11.1667C14.9455 11.1667 17.3333 8.77885 17.3333 5.83333C17.3333 2.88781 14.9455 0.5 12 0.5C9.05449 0.5 6.66667 2.88781 6.66667 5.83333ZM20 11.1667C20 13.3758 21.7909 15.1667 24 15.1667C26.2091 15.1667 28 13.3758 28 11.1667C28 8.95753 26.2091 7.16667 24 7.16667C21.7909 7.16667 20 8.95753 20 11.1667Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9778 13.8333C5.68255 13.8333 0.517678 17.0687 0.000868912 23.4323C-0.0272823 23.7789 0.635616 24.5 0.970003 24.5H22.9956C23.9972 24.5 24.0128 23.694 23.9972 23.4333C23.6065 16.8909 18.3616 13.8333 11.9778 13.8333ZM31.2746 24.5L26.1333 24.5C26.1333 21.4988 25.1417 18.7291 23.4683 16.5008C28.0103 16.5505 31.7189 18.8469 31.998 23.7C32.0092 23.8955 31.998 24.5 31.2746 24.5Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
            </svg>
          </div>
        </div>

        <div className="bg-black p-5 rounded-lg">
          <h1 className="opacity-80">Total Order</h1>
          <h3>10,293</h3>

          <div className="float-right p-2 rounded-md bg-[#D6951C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 30 35"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 12.1241L12.9005 19.5722C13.0394 19.6524 13.1851 19.7104 13.3333 19.7471V34.1924L0.920065 26.8462C0.349784 26.5087 0 25.8952 0 25.2326V12.1241ZM30 11.9261V25.2326C30 25.8952 29.6502 26.5087 29.0799 26.8462L16.6667 34.1924V19.6206C16.6969 19.6055 16.7269 19.5894 16.7566 19.5722L30 11.9261Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
              <path
                opacity="0.499209"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.40522 8.50907C0.562795 8.31009 0.761683 8.14191 0.993562 8.01841L14.1186 1.02775C14.6695 0.734281 15.3305 0.734281 15.8814 1.02775L29.0064 8.01841C29.1852 8.11361 29.3443 8.23536 29.48 8.37731L15.0899 16.6855C14.9953 16.7401 14.908 16.8026 14.8285 16.8717C14.749 16.8026 14.6618 16.7401 14.5672 16.6855L0.40522 8.50907Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
            </svg>
          </div>
        </div>

        <div className="bg-black p-5 rounded-lg">
          <h1 className="opacity-80">Total Sales</h1>
          <h3>$89,000</h3>

          <div className="float-right p-2 rounded-md bg-[#3B2526]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M3.11111 25.3889H26.4444C27.3036 25.3889 28 26.0853 28 26.9444C28 27.8036 27.3036 28.5 26.4444 28.5H1.55556C0.696446 28.5 0 27.8036 0 26.9444V2.05556C0 1.19645 0.696446 0.5 1.55556 0.5C2.41467 0.5 3.11111 1.19645 3.11111 2.05556V25.3889Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
              <path
                opacity="0.759394"
                d="M8.91263 18.675C8.32504 19.3018 7.34063 19.3335 6.71388 18.7459C6.08713 18.1584 6.05537 17.1739 6.64295 16.5472L12.4763 10.325C13.0445 9.71882 13.9888 9.66626 14.6209 10.2056L19.2249 14.1344L25.2235 6.53609C25.7559 5.86179 26.734 5.74671 27.4083 6.27906C28.0826 6.8114 28.1977 7.78958 27.6654 8.46388L20.6654 17.3305C20.1186 18.0231 19.1059 18.1227 18.4347 17.5499L13.7306 13.5358L8.91263 18.675Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
            </svg>
          </div>
        </div>

        <div className="bg-black p-5 rounded-lg">
          <h1 className="opacity-80">Total Pending</h1>
          <h3>2,040</h3>

          <div className="float-right p-2 rounded-md bg-[#CC5872]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 31"
              fill="none"
            >
              <path
                opacity="0.78"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6312 9.89918C12.6512 9.63868 12.8684 9.43753 13.1297 9.43753H13.5475C13.8044 9.43753 14.0195 9.63218 14.045 9.88778L14.6667 16.1042L19.0814 18.6269C19.2372 18.7159 19.3333 18.8816 19.3333 19.061V19.4496C19.3333 19.7793 19.0199 20.0187 18.7018 19.932L12.3987 18.2129C12.1673 18.1498 12.0133 17.9313 12.0317 17.6922L12.6312 9.89918Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
              <path
                opacity="0.901274"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.72176 1.07474C6.45765 0.759987 5.94771 0.880457 5.85238 1.28012L4.21891 8.12826C4.14123 8.45391 4.39931 8.76241 4.73356 8.74347L11.7783 8.34425C12.1892 8.32097 12.3976 7.83894 12.133 7.52366L10.3316 5.37682C11.4965 4.97877 12.7317 4.77086 14 4.77086C20.2592 4.77086 25.3333 9.84497 25.3333 16.1042C25.3333 22.3634 20.2592 27.4375 14 27.4375C7.74077 27.4375 2.66667 22.3634 2.66667 16.1042C2.66667 15.0534 2.80896 14.0243 3.08641 13.0351L0.518845 12.3149C0.180793 13.5201 0 14.791 0 16.1042C0 23.8362 6.26801 30.1042 14 30.1042C21.732 30.1042 28 23.8362 28 16.1042C28 8.37221 21.732 2.1042 14 2.1042C12.0551 2.1042 10.2029 2.50078 8.51973 3.21748L6.72176 1.07474Z"
                fill="white"
                style={{ fill: 'white', fillOpacity: 1 }}
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-black mt-10 p-20 rounded-lg">
        <h1 className="text-3xl">Sales Details</h1>
        <SalesChart />
      </div>

      <div className="bg-black mt-10 p-10 rounded-lg">
        <h1 className="text-3xl mb-10">Latest Orders</h1>
        {/* <ReactDataTable dataEntered={orders} /> */}
      </div>
    </div>
  );
};

export default MainPage;
