import { createStore, applyMiddleware } from "redux";
import RootReducer from "./combineReducer";
import thunk from "redux-thunk";

const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;
