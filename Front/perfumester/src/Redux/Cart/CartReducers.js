import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error:false,
    cart:[],
    addToCart:[],
    updateCart:[],
    removeFromCart:[],
}


const cartPageSlice = createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            getCartDataRequest:(state,action)=>{
                state.loading = true;
                state.cart = [];    
                state.error = false;
            },
            getCartDataSuccess:(state,action)=>{
                state.loading = false;
                state.error = false;
            },
            getCartDataFailure:(state,action)=>{
                state.loading = false;
                state.cart = [];
                state.error = action.payload;
            },

            addToCartRequest:(state,action)=>{
                state.loading = true;
                state.addToCart = [];
                state.error = false;
            },
            addToCartSuccess:(state,action)=>{
                state.loading = false;
                
                const item = action.payload;

                const existingItem = state.cart.find(cartItem =>cartItem.id === item.id);
                if(existingItem){
                    existingItem.quantity += item.quantity;
                }else{
                    state.cart.add(item);
                }
                state.error = false;
            }, 
            addToCartFailure:(state,action)=>{
                state.loading = false;
                state.addToCart = [];
                state.error = action.payload;
            },

            updateCartRequest:(state,action)=>{
                state.loading = true;
                state.updateCart = [];
                state.error = false;
            },
            updateCartSuccess:(state,action)=>{
                state.loading = false;

                const {id,quantity}=action.payload;

                const existingItem = state.cart.find(cartItem => cartItem.id === id);
                if(existingItem){
                    existingItem.quantity = quantity;
                }
                state.error = false;
            },
            updateCartFailure:(state,action)=>{
                state.loading = false;
                state.updateCart = [];
                state.error = action.payload;
            },

            removeFromCartRequest:(state,action)=>{
                state.loading = true;
                state.removeFromCart = [];
                state.error = false;
            },
            removeFromCartSuccess:(state,action)=>{
                state.loading = false;
                const itemId = action.payload;
                state.cart = state.cart.filter(cartItem => cartItem.id !== itemId);
                state.error = false;
            },
            removeFromCartFailure:(state,action)=>{
                state.loading = false;
                state.removeFromCart = [];
                state.error = action.payload;
            }


        }

    }
)
export const CartPageActions = cartPageSlice.actions;
export default cartPageSlice;