import { SubscriptionsPageAction } from "./SubscriptionsReducers";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getSubscriptions = () => async (dispatch) => {
  try {
    dispatch(SubscriptionsPageAction.getSubscriptionsDataRequest());
    const response = await axios.get(`${API_BASE_URL}/packages`);
    dispatch(
      SubscriptionsPageAction.getSubscriptionsDataSuccess(response.data)
    );
  } catch (e) {
    dispatch(SubscriptionsPageAction.getSubscriptionsDataFailure(e.message));
  }
};
