import axios from "axios";
import { UserAction } from "./UserReducer"


export const loginUser = (email, password)=>async (dispatch)=>{
    try{

        dispatch(UserAction.LoginUserRequest());
        const response = await axios.post('url',{email,password});
        dispatch(UserAction.LoginUserSuccess(response));
    }catch(err){
        dispatch(UserAction.LoginUserFailure(err.message))
    }
} 