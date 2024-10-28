import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error:false,
    profileData:[],
    userSubscriptions:[],
    userOrders:[],
}

const profilePageSlice= createSlice({
    name:'profile',
    initialState,
    reducers:{
        getProfileDataRequest:(state,action)=>{
            state.loading = true;
            state.error = false;
            state.profileData= [];
        },
        getProfileDataSuccess:(state,action)=>{
            state.loading = false;
            state.error = false;
            state.profileData= action.payload;
        },
        getProfileDataFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.profileData= [];
        },

        getUserSubscriptionsRequest:(state,action)=>{
            state.loading = true;
            state.error = false;
            state.userSubscriptions= [];
        },
        getUserSubscriptionsSuccess:(state,action)=>{
            state.loading = false;
            state.error = false;
            state.userSubscriptions=action.payload;
        },
        getUserSubscriptionsFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.userSubscriptions=[];
        },

        getUserOrdersRequest:(state,action)=>{ 
            state.loading = true;
            state.error = false;
            state.userOrders=[];
        },
        getUserOrdersSuccess:(state,action)=>{
            state.loading = false;
            state.error = false;
            state.userOrders=action.payload;
        },
        getUserOrdersFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.userOrders=[];
        }
    


    }
})

export const ProfilePageAction = profilePageSlice.actions;
export default profilePageSlice;