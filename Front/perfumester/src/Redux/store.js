import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import rootReducer from "./rootReducer";
const reducer = rootReducer;

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
