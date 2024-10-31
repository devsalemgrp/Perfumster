import { NewPageAction } from "./NewReducers";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getNewData = () => async (dispatch) => {
  try {
    dispatch(NewPageAction.getBackgroundDataRequest());
    const response = await axios.get(`${API_BASE_URL}/new`);
    dispatch(NewPageAction.getBackgroundDataSuccess(response.data));
  } catch (e) {
    dispatch(NewPageAction.getBackgroundDataFailure(e.message));
  }
};
