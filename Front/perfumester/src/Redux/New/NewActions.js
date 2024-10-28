import { NewPageAction } from "./NewReducers";
import axios from "axios";

export const getNewData = () => async (dispatch) => {
  try {
    dispatch(NewPageAction.getBackgroundDataRequest());
    const response = await axios.get("http://localhost:3001/api/new");
    dispatch(NewPageAction.getBackgroundDataSuccess(response.data));
  } catch (e) {
    dispatch(NewPageAction.getBackgroundDataFailure(e.message));
  }
};
