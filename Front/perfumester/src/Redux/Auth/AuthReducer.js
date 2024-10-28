import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error:false,
    login:[],
    signup:[],
}

const authPageSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        getLoginRequest:(state,action) =>{
            state.loading = true;
            state.error = false;
            state.login = [];
        },
        getLoginSuccess:(state,action) =>{
            state.loading = false;
            state.error = false;
            state.login =action.payload;
        },
        getLoginFailure:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
            state.login = [];
        },

        getSignUpRequest:(state,action) =>{
            state.loading = true;
            state.error = false;
            state.signup = [];
        },
        getSignUpSuccess:(state,action) =>{
            state.loading = false;
            state.error = false;
            state.signup =action.payload;
        },
        getSignUpFailure:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
            state.signup = [];
        }

    }
})

export const AuthPageAction = authPageSlice.actions;
export default authPageSlice