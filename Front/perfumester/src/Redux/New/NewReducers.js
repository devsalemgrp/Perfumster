import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  new_data: [],
};

const newPageSlice = createSlice({
  name: "new",
  initialState,
  reducers: {
    getBackgroundDataRequest: (state, action) => {
      state.loading = true;
      state.error = false;
      state.new_data = [];
    },
    getBackgroundDataSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.new_data = action.payload;
    },
    getBackgroundDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.new_data = [];
    },
  },
});

export const NewPageAction = newPageSlice.actions;
export default newPageSlice;
