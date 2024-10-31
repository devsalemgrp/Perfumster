import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  cart: [],
  addToCart: [],
  updateCart: [],
  removeFromCart: [],
};

const cartPageSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartDataRequest: (state, action) => {
      state.loading = true;
      state.cart = [];
      state.error = false;
    },
    getCartDataSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
    },
    getCartDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addToCartRequest: (state, action) => {
      state.loading = true;
      state.addToCart = [];
      state.error = false;
    },
    addToCartSuccess: (state, action) => {
      state.loading = false;
      var item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.perfume.id
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
        console.log(state.cart);
      } else {
        state.cart.push({
          id: item.perfume.id,
          perfume: item.perfume,
          quantity: item.quantity,
        });
      }
      state.error = false;
    },
    addToCartFailure: (state, action) => {
      state.loading = false;
      state.addToCart = [];
      state.error = action.payload;
    },

    increaseQuantityRequest: (state, action) => {
      state.loading = true;
      state.updateCart = [];
      state.error = false;
    },
    increaseQuantitySuccess: (state, action) => {
      state.loading = false;

      const item = action.payload;

      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity++;
      }
      state.error = false;
    },
    increaseQuantityFailure: (state, action) => {
      state.loading = false;
      state.updateCart = [];
      state.error = action.payload;
    },

    decreaseQuantityRequest: (state, action) => {
      state.loading = true;
      state.updateCart = [];
      state.error = false;
    },
    decreaseQuantitySuccess: (state, action) => {
      state.loading = false;

      const item = action.payload;

      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        if (existingItem.quantity !== 1) existingItem.quantity--;
      }
      state.error = false;
    },
    decreaseQuantityFailure: (state, action) => {
      state.loading = false;
      state.updateCart = [];
      state.error = action.payload;
    },

    removeFromCartRequest: (state, action) => {
      state.loading = true;
      state.removeFromCart = [];
      state.error = false;
    },
    removeFromCartSuccess: (state, action) => {
      state.loading = false;
      const item = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id);
      state.error = false;
    },
    removeFromCartFailure: (state, action) => {
      state.loading = false;
      state.removeFromCart = [];
      state.error = action.payload;
    },
  },
});
export const CartPageActions = cartPageSlice.actions;
export default cartPageSlice;
