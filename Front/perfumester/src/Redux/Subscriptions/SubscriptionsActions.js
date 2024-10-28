import { SubscriptionsPageAction } from "./SubscriptionsReducers";
import axios from "axios";

export const getSubscriptions = () => async (dispatch) => {
  try {
    dispatch(SubscriptionsPageAction.getSubscriptionsDataRequest());
    const response = await axios.get("http://localhost:3001/api/packages");
    dispatch(
      SubscriptionsPageAction.getSubscriptionsDataSuccess(response.data)
    );
  } catch (e) {
    dispatch(SubscriptionsPageAction.getSubscriptionsDataFailure(e.message));
  }
};
