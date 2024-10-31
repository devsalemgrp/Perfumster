import { HomePageSlice } from "./HomeReducers";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const getHomePageData = () => async (dispatch) => {
  try {
    dispatch(HomePageSlice.getHomePageDataRequest());
    const response = await axios.get(`${API_BASE_URL}/home`);
    console.log(response);
    dispatch(HomePageSlice.getHomePageDataSuccess(response.data));
  } catch (err) {
    dispatch(HomePageSlice.getHomePageDataFailure(err.message));
  }
};

export const getSubscriptionsData = () => async (dispatch) => {
  try {
    dispatch(HomePageSlice.getSubscriptionsDataRequest());
    const response = await axios.get("url");
    dispatch(HomePageSlice.getSubscriptionsDataSuccess(response));
  } catch (err) {
    dispatch(HomePageSlice.getSubscriptionsDataFailure(err.message));
  }
};
