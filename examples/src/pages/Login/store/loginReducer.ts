import { ILoginStoreAction, ILoginStoreState } from "../interfaces";
import { LOGIN, LOGIN_ERROR, LOGOUT } from "./actions";

const initialStoreState: ILoginStoreState = {
  isLoggedIn: false,
  errorMsg: "",
  loggedInUser: {},
};

const loginReducer = (
  state: ILoginStoreState = initialStoreState,
  action: ILoginStoreAction
): ILoginStoreState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, loggedInUser: action.payload };
    case LOGIN_ERROR:
      return { ...state, errorMsg: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false, errorMsg: "", loggedInUser: {} };
    default:
      return state;
  }
};

export default loginReducer;
