import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    userData:[],
    userSubscriptions:[],
    userOrders:[],
}

const userSlice = createSlice(
    {
        name:'user',
        initialState,
        reducers:{
            LoginUserRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.userData = [];
                state.userOrders = [];
                state.userSubscriptions = [];
            },
            LoginUserSuccess:(state,action)=>{
                state.loading = false;
                state.userData = action.payload;
                state.userOrders = action.payload;
                state.userSubscriptions = action.payload;
                state.error = false;
            }
            ,
            LoginUserFailure :(state,action)=>{
                state.error = action.payload;
                state.loading = false ;
                state.userOrders = [];
                state.userData = [];
                state.userSubscriptions = [];
            }

        }

    }
)

export const UserAction = userSlice.actions;
export default userSlice;