import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading: false,
    error:false,
    subscriptions:[]
}

const subscriptionsPageSlice= createSlice({
    name:'subscriptions',
    initialState,
    reducers:{
        getSubscriptionsDataRequest:(state,action) =>{
            state.loading = true;
            state.error = false;
            state.subscriptions = [];
        },
        getSubscriptionsDataSuccess:(state,action) =>{
            state.loading = false;
            state.error = false;
            state.subscriptions =action.payload;
        },
        getSubscriptionsDataFailure:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
            state.subscriptions = [];
        }

    }
})

export const SubscriptionsPageAction = subscriptionsPageSlice.actions;
export default subscriptionsPageSlice