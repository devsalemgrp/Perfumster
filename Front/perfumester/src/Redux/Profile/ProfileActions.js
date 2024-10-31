import { ProfilePageAction } from "./ProfileReducers";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProfileData = () => async (dispatch) => {
  try {
    dispatch(ProfilePageAction.getProfileDataRequest());
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/users/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(ProfilePageAction.getProfileDataSuccess(response?.data.data[0]));
  } catch (err) {
    dispatch(ProfilePageAction.getProfileDataFailure(err));
  }
};

export const getUserOrders = () => async (dispatch) => {
  try {
    dispatch(ProfilePageAction.getUserOrdersRequest());
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/orders/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(ProfilePageAction.getUserOrdersSuccess(response.data.orders));
  } catch (err) {
    dispatch(ProfilePageAction.getUserOrdersFailure(err));
  }
};

export const updateUserInfo = (user) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("image", user.profileImage);
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phoneNumber", user.phoneNumber);
    formData.append("dateOfBirth", user.dateOfBirth);
    formData.append("profession", user.profession);
    formData.append("country", user.country);

    dispatch(ProfilePageAction.updateUserInfoRequest());
    const response = await axios.patch(
      `${API_BASE_URL}/users/update/` + user.id,
      formData
    );
    dispatch(ProfilePageAction.updateUserInfoSuccess(response));
    dispatch(getProfileData());
  } catch (err) {
    dispatch(ProfilePageAction.updateUserInfoFailure(err));
  }
};

export const getUserSubscription = () => async (dispatch) => {
  try {
    dispatch(ProfilePageAction.getUserSubscriptionsRequest());
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_BASE_URL}/subscriptions/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(ProfilePageAction.getUserSubscriptionsSuccess(response.data));
  } catch (e) {
    dispatch(ProfilePageAction.getUserSubscriptionsFailure(e.message));
  }
};
