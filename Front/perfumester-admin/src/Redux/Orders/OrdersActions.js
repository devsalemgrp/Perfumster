import axios from 'axios';
import { OrdersAction } from './OrdersReducer';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getLatestOrders = () => async (dispatch) => {
  try {
    dispatch(OrdersAction.getOrdersRequest());
    const response = await axios.get(`${API_BASE_URL}/orders`);
    dispatch(OrdersAction.getOrdersSuccess(response.data));
  } catch (error) {
    dispatch(OrdersAction.getOrdersFailure());
  }
};

export const editOrderStatus = (id, status) => async (dispatch) => {
  try {
    console.log(status);
    dispatch(OrdersAction.editOrderStatusRequest());
    const response = await axios.patch(`${API_BASE_URL}/orders/update/` + id, {
      status,
    });
    dispatch(OrdersAction.editOrderStatusSuccess(response));
    dispatch(getLatestOrders());
  } catch (error) {
    dispatch(OrdersAction.editOrderStatusFailure());
  }
};
