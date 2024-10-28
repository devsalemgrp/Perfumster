import { combineReducers } from "@reduxjs/toolkit";
import authPageSlice from "./Auth/AuthReducer";
import cartPageSlice from "./Cart/CartReducers";
import forHimPageSlice from "./ForHim/ForHimReducers";
import forHerPageSlice from "./ForHer/ForHerReducers";
import homePageSlice from "./Home/HomeReducers";
import newPageSlice from "./New/NewReducers";
import productsPageSlice from "./Products/ProductsReducers";
import profilePageSlice from "./Profile/ProfileReducers";
import subscriptionsPageSlice from "./Subscriptions/SubscriptionsReducers";
const rootReducer = combineReducers({
    authReducer:authPageSlice.reducer,
    cartReducer:cartPageSlice.reducer,
    forHerReducer:forHerPageSlice.reducer,
    forHimReducer:forHimPageSlice.reducer,
    homeReducer:homePageSlice.reducer,
    newReducer:newPageSlice.reducer,
    productsReducer:productsPageSlice.reducer,
    profileReducer:profilePageSlice.reducer,
    subscriptionsReducer:subscriptionsPageSlice.reducer
})

export default rootReducer;