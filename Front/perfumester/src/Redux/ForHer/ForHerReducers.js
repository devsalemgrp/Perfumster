import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  womenData: [],
  womenProducts: [],
  homeSectionBackgrounds: [],
  recommendedPerfumes: [],
  specialProducts: [],
  specialBackgrounds: [],
};

const forHerPageSlice = createSlice({
  name: "forHer",
  initialState,
  reducers: {
    getWomenDataRequest: (state, action) => {
      state.loading = true;
      state.womenData = [];
      state.error = false;
    },
    getWomenDataSuccess: (state, action) => {
      state.loading = false;
      state.womenData = action.payload;
      state.error = false;
    },
    getWomenDataFailure: (state, action) => {
      state.loading = false;
      state.womenData = [];
      state.error = action.payload;
    },

    getWomenProductsRequest: (state, action) => {
      state.loading = true;
      state.womenProducts = [];
      state.error = false;
    },
    getWomenProductsSuccess: (state, action) => {
      state.loading = false;
      state.womenProducts = action.payload;
      state.error = false;
    },
    getWomenProductsFailure: (state, action) => {
      state.loading = false;
      state.womenProducts = [];
      state.error = action.payload;
    },

    getHomeSectionBackgroundsRequest: (state, action) => {
      state.loading = true;
      state.homeSectionBackgrounds = [];
      state.error = false;
    },
    getHomeSectionBackgroundsSuccess: (state, action) => {
      state.loading = false;
      state.homeSectionBackgrounds = action.payload;
      state.error = false;
    },
    getHomeSectionBackgroundsFailure: (state, action) => {
      state.loading = false;
      state.homeSectionBackgrounds = [];
      state.error = action.payload;
    },

    getRecommendedPerfumesRequest: (state, action) => {
      state.loading = true;
      state.recommendedPerfumes = [];
      state.error = false;
    },

    getRecommendedPerfumesSuccess: (state, action) => {
      state.loading = false;
      state.recommendedPerfumes = action.payload;
      state.error = false;
    },
    getRecommendedPerfumesFailure: (state, action) => {
      state.loading = false;
      state.recommendedPerfumes = [];
      state.error = action.payload;
    },

    getSpecialProductsRequest: (state, action) => {
      state.loading = true;
      state.specialProducts = [];
      state.error = false;
    },
    getSpecialProductsSuccess: (state, action) => {
      state.loading = false;
      state.specialProducts = action.payload;
      state.error = false;
    },
    getSpecialProductsFailure: (state, action) => {
      state.loading = false;
      state.specialProducts = [];
      state.error = action.payload;
    },

    getSpecialBackgroundsRequest: (state, action) => {
      state.loading = true;
      state.specialBackgrounds = [];
      state.error = false;
    },
    getSpecialBackgroundsSuccess: (state, action) => {
      state.loading = false;
      state.specialBackgrounds = action.payload;
      state.error = false;
    },
    getSpecialBackgroundsFailure: (state, action) => {
      state.loading = false;
      state.specialBackgrounds = [];
      state.error = action.payload;
    },
  },
});

export const ForHerPageAction = forHerPageSlice.actions;
export default forHerPageSlice;
