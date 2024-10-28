import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading: false,
    error:false,
    products:[]
}

const productsPageSlice= createSlice({
    name:'products',
    initialState,
    reducers:{
        getProductsRequest:(state,action) =>{
            state.loading = true;
            state.error = false;
            state.products = [];
        },
        getProductsSuccess:(state,action) =>{
            state.loading = false;
            state.error = false;
            state.products =action.payload;
        },
        getProductsFailure:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
            state.products = [];
        }

    }
})

export const ProductsPageAction = productsPageSlice.actions;
export default productsPageSlice