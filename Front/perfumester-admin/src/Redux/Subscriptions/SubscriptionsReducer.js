import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    subscriptions: [],
}

const subscriptionsSlice = createSlice(
    {
        name:'subscriptions',
        initialState,
        reducers:{
            GetSubscriptionsRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.subscriptions = [];
            },
            GetSubscriptionsSuccess:(state,action)=>{
                state.loading = false;
                state.subscriptions = action.payload;
                state.error = false;
            }
            ,
            GetSubscriptionsFailure :(state,action)=>{
                state.error = action.payload;
                state.loading = false ;
                state.subscriptions = [];
            }
        }
    }
)

export const SubscriptionsAction = subscriptionsSlice.actions;
export default subscriptionsSlice;
