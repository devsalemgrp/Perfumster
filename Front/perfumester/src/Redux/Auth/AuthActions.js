import { getProfileData } from "../Profile/ProfileActions";
import { AuthPageAction } from "./AuthReducer";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch(AuthPageAction.getLoginRequest());
    const { email, password } = user;
    const response = await axios.post(`${API_BASE_URL}/users/login`, {
      email,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    dispatch(AuthPageAction.getLoginSuccess(response.data));
    dispatch(getProfileData());
  } catch (e) {
    dispatch(AuthPageAction.getLoginFailure(e.message));
  }
};

export const signInUser = (user) => async (dispatch) => {
  try {
    dispatch(AuthPageAction.getSignUpRequest());
    const { email, password } = user;
    const res = await axios.post(`${API_BASE_URL}/user/signup`, {
      email,
      password,
    });
    dispatch(AuthPageAction.getSignUpSuccess(res.data.user));
  } catch (error) {
    dispatch(AuthPageAction.getSignUpFailure(error.message));
    console.log(error);
  }
};
