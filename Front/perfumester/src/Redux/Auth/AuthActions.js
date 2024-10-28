import {  AuthPageAction } from "./AuthReducer";
import axios from "axios";

export const login =()=>async(dispatch)=>{
    try{
        dispatch(AuthPageAction.getLoginRequest());
        const response = await axios.get('url');
        dispatch(AuthPageAction.getLoginSuccess(response));
    }catch(e){
        dispatch(AuthPageAction.getLoginFailure(e.message));
    }
}

export const signUp = (email, password) => async (dispatch) => {
    try {
      dispatch(AuthPageAction.getSignUpRequest());
      const res = await axios.post(global.API_URL + "/user/signup", {
        email,
        password,
      });
      dispatch(AuthPageAction.getSignUpSuccess(res.data.user));
    } catch (error) {
      dispatch(AuthPageAction.getSignUpFailure(error.message));
      console.log(error);
    }
  };