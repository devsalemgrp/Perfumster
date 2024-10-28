import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  perfumes: [],
  addProduct: [],
  updateProduct: [],
  deleteProduct: [],
};

const perfumesSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    getPerfumesRequest: (state, action) => {
      state.loading = true;
      state.error = false;
      state.perfumes = [];
    },
    getPerfumesSuccess: (state, action) => {
      state.loading = false;
      state.perfumes = action.payload;
      state.error = false;
    },
    getPerfumesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.perfumes = [];
    },

    addProductRequest: (state, action) => {
      state.loading = true;
      state.addProduct = [];
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.loading = false;
      state.addProduct = action.payload;
      state.error = false;
    },
    addProductFailure: (state, action) => {
      state.loading = false;
      state.addProduct = [];
      state.error = action.payload;
    },

    updateProductRequest: (state, action) => {
      state.loading = true;
      state.updateProduct = [];
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.updateProduct = action.payload;
      state.error = false;
    },
    updateProductFailure: (state, action) => {
      state.loading = false;
      state.updateProduct = [];
      state.error = action.payload;
    },

    deleteProductRequest: (state, action) => {
      state.loading = true;
      state.deleteProduct = [];
      state.error = false;
    },

    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.deleteProduct = action.payload;
      state.error = false;
    },

    deleteProductFailure: (state, action) => {
      state.loading = false;
      state.deleteProduct = [];
      state.error = action.payload;
    },
  },
});

export const PerfumesAction = perfumesSlice.actions;
export default perfumesSlice;
