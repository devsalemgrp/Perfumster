import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error:false,
}

const checkoutPageSlice= createSlice({
    name:'checkout',
    initialState,
    reducers:{
        
    }
})

export const CheckoutAction = checkoutPageSlice.actions;
export default checkoutPageSlice