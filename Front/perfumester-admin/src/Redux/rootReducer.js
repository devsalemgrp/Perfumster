import { combineReducers } from "redux";
import userSlice from "./User/UserReducer";
import womenPageSlice from "./WomensPage/WomensPageReducer";
import subscriptionsSlice from "./Subscriptions/SubscriptionsReducer";
import perfumesSlice from "./Perfumes/PerfumesReducer";
import packagesSlice from "./Packages/PackagesReducer";
import ordersSlice from "./Orders/OrdersReducer";
import newPageSlice from "./NewPage/NewPageReducer";
import menPageSlice from "./MensPage/MensPageReducer";
import homePageSlice from "./HomePage/HomePageReducer";

const rootReducer= combineReducers({
    userReducer: userSlice.reducer,
    womenPageReducer : womenPageSlice.reducer,
    subscriptionsReducer : subscriptionsSlice.reducer,
    perfumesReducer : perfumesSlice.reducer,
    packagesReducer : packagesSlice.reducer,
    ordersReducer : ordersSlice.reducer,
    newPageReducer : newPageSlice.reducer,
    mensPageReducer : menPageSlice.reducer,
    homePageReducer:homePageSlice.reducer,


})

export default rootReducer;