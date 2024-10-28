import axios from 'axios';
import { OrdersAction } from './OrdersReducer';

export const getLatestOrders = () => async (dispatch) => {
  try {
    dispatch(OrdersAction.getOrdersRequest());
    const response = await axios.get('http://localhost:3001/api/orders');
    dispatch(OrdersAction.getOrdersSuccess(response.data));
  } catch (error) {
    dispatch(OrdersAction.getOrdersFailure());
  }
};

export const editOrderStatus = (id, status) => async (dispatch) => {
  try {
    console.log(status);
    dispatch(OrdersAction.editOrderStatusRequest());
    const response = await axios.patch(
      'http://localhost:3001/api/orders/update/' + id,
      { status }
    );
    dispatch(OrdersAction.editOrderStatusSuccess(response));
    dispatch(getLatestOrders());
  } catch (error) {
    dispatch(OrdersAction.editOrderStatusFailure());
  }
};
