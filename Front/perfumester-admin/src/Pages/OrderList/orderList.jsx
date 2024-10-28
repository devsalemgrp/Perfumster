import React, { useEffect, useState } from 'react';
import OrdersDataTable from './DataTable/ordersDataTable';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestOrders } from '../../Redux/Orders/OrdersActions';
import LatestOrdersDataTable from './DataTable/latestOrdersDataTable';

const OrderList = () => {
  const [isLatestOrders, setIsLatestOrders] = useState(false);

  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ordersReducer);
  const [_orders, setOrders] = useState([]);
  useEffect(() => {
    dispatch(getLatestOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders.data) {
      setOrders(orders.data);
    }
  }, [orders]);
  return (
    <div className="w-full p-14">
      <div>
        <h1 className="text-4xl">Order List</h1>
        <div className="bg-black mt-10 p-10 rounded-lg">
          <h1 className="text-3xl mb-10">
            {isLatestOrders ? 'Latest Orders' : 'Received Orders'}
          </h1>

          <div className="flex flex-row gap-x-5 my-5">
            <div
              className={`px-5 py-2 text-black cursor-pointer  ${
                !isLatestOrders ? 'bg-slate-500' : 'bg-white'
              }`}
              onClick={() => setIsLatestOrders(true)}
            >
              Latest Orders
            </div>
            <div
              className={`px-5 py-2 text-black cursor-pointer  ${
                isLatestOrders ? 'bg-slate-500' : 'bg-white'
              }`}
              onClick={() => setIsLatestOrders(false)}
            >
              Received Orders
            </div>
          </div>
          {isLatestOrders && <LatestOrdersDataTable dataEntered={_orders} />}
          {/* {!isLatestOrders && <OrdersDataTable dataEntered={orders} />} */}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
