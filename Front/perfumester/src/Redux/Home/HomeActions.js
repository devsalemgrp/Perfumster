import { HomePageSlice } from "./HomeReducers";
import axios from "axios";

export const getHomePageData = () => async (dispatch) => {
  try {
    dispatch(HomePageSlice.getHomePageDataRequest());
    const response = await axios.get("http://localhost:3001/api/home");
    console.log(response);
    dispatch(HomePageSlice.getHomePageDataSuccess(response.data));
  } catch (err) {
    dispatch(HomePageSlice.getHomePageDataFailure(err.message));
  }
};

// export const getSection2Data = () => async (dispatch) => {
//   try {
//     dispatch(HomePageSlice.getSection2DataRequest());
//     const response = await axios.get("url");
//     dispatch(HomePageSlice.getSection2DataSuccess(response));
//   } catch (err) {
//     dispatch(HomePageSlice.getSection2DataFailure(err.message));
//   }
// };

// export const getHeroSectionData = () => async (dispatch) => {
//   try {
//     dispatch(HomePageSlice.getHeroSectionDataRequest());
//     const response = await axios.get("url");
//     dispatch(HomePageSlice.getHeroSectionDataSuccess(response));
//   } catch (err) {
//     dispatch(HomePageSlice.getHeroSectionDataFailure(err.message));
//   }
// };

// export const callToActionData = () => async (dispatch) => {
//   try {
//     dispatch(HomePageSlice.getCallToActionDataRequest());
//     const response = await axios.get("url");
//     dispatch(HomePageSlice.getCallToActionDataSuccess(response));
//   } catch (err) {
//     dispatch(HomePageSlice.getCallToActionDataFailure(err.message));
//   }
// };

export const getSubscriptionsData = () => async (dispatch) => {
  try {
    dispatch(HomePageSlice.getSubscriptionsDataRequest());
    const response = await axios.get("url");
    dispatch(HomePageSlice.getSubscriptionsDataSuccess(response));
  } catch (err) {
    dispatch(HomePageSlice.getSubscriptionsDataFailure(err.message));
  }
};
