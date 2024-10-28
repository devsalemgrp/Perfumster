import { userInfo } from "../../Shared/profileData";
import { ProfilePageAction } from "./ProfileReducers";
import axios from "axios";

export const getProfileData = () => async (dispatch) => {
  try {
    dispatch(ProfilePageAction.getProfileDataRequest());
    const response = userInfo;
    dispatch(ProfilePageAction.getProfileDataSuccess(response));
  } catch (err) {
    dispatch(ProfilePageAction.getProfileDataFailure(err));
  }
};

export const getUserSubscriptions = () => async (dispatch) => {
  try {
    dispatch(ProfilePageAction.getUserSubscriptionsRequest());
    const response = await axios.get("url");
    dispatch(ProfilePageAction.getUserSubscriptionsSuccess(response));
  } catch (err) {
    dispatch(ProfilePageAction.getUserSubscriptionsFailure(err));
  }
};

export const getUserOrders = () => async (dispatch) => {
  try {
    dispatch(ProfilePageAction.getUserOrdersRequest());
    const response = await axios.get("url");
    dispatch(ProfilePageAction.getUserOrdersSuccess(response));
  } catch (err) {
    dispatch(ProfilePageAction.getUserOrdersFailure(err));
  }
};
