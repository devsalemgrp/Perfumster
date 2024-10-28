import { createSlice } from "@reduxjs/toolkit";
import { getHomePageData } from "./HomeActions";

const initialState = {
  loading: false,
  error: false,
  homePageData: [],
  welcomeSectionBackgrounds: [],
  heroSectionData: [],
  section2Data: [],
  callToActionData: [],
  subscriptionsData: [],
};
const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    getHomePageDataRequest: (state, action) => {
      state.loading = true;
      state.homePageData = [];
      state.error = false;
    },
    getHomePageDataSuccess: (state, action) => {
      state.loading = false;
      state.homePageData = action.payload;
      state.error = false;
    },
    getHomePageDataFailure: (state, action) => {
      state.loading = false;
      state.homePageData = [];
      state.error = action.payload;
    },

    getWelcomeSectionBackgroundsRequest: (state, action) => {
      state.loading = true;
      state.welcomeSectionBackgrounds = [];
      state.error = false;
    },
    getWelcomeSectionBackgroundsSuccess: (state, action) => {
      state.loading = false;
      state.welcomeSectionBackgrounds = action.payload;
      state.error = false;
    },
    getWelcomeSectionBackgroundsFailure: (state, action) => {
      state.loading = false;
      state.welcomeSectionBackgrounds = [];
      state.error = action.payload;
    },

    getHeroSectionDataRequest: (state, action) => {
      state.loading = true;
      state.heroSectionData = [];
      state.error = false;
    },
    getHeroSectionDataSuccess: (state, action) => {
      state.loading = false;
      state.heroSectionData = action.payload;
      state.error = false;
    },
    getHeroSectionDataFailure: (state, action) => {
      state.loading = false;
      state.heroSectionData = [];
      state.error = action.payload;
    },

    getSection2DataRequest: (state, action) => {
      state.loading = true;
      state.section2Data = [];
      state.error = false;
    },
    getSection2DataSuccess: (state, action) => {
      state.loading = false;
      state.section2Data = action.payload;
      state.error = false;
    },
    getSection2DataFailure: (state, action) => {
      state.loading = false;
      state.section2Data = [];
      state.error = action.payload;
    },

    getCallToActionDataRequest: (state, action) => {
      state.loading = true;
      state.callToActionData = [];
      state.error = false;
    },
    getCallToActionDataSuccess: (state, action) => {
      state.loading = false;
      state.callToActionData = action.payload;
      state.error = false;
    },
    getCallToActionDataFailure: (state, action) => {
      state.loading = false;
      state.callToActionData = [];
      state.error = action.payload;
    },

    getSubscriptionsDataRequest: (state, action) => {
      state.loading = true;
      state.subscriptionsData = [];
      state.error = false;
    },
    getSubscriptionsDataSuccess: (state, action) => {
      state.loading = false;
      state.subscriptionsData = action.payload;
      state.error = false;
    },
    getSubscriptionsDataFailure: (state, action) => {
      state.loading = false;
      state.subscriptionsData = [];
      state.error = action.payload;
    },
  },
});

export const HomePageSlice = homePageSlice.actions;
export default homePageSlice;
