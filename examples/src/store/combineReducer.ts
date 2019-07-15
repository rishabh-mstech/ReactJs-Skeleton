import { combineReducers } from "redux";
import homeReducer from "../pages/Home/store/homeReducer";
import loginReducer from "../pages/Login/store/loginReducer";

const RootReducer = combineReducers({
  home: homeReducer,
  login: loginReducer,
});

export default RootReducer;
