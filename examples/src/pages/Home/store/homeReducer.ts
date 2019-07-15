import { GET_USER_LIST, HOME_ERROR } from "./actions";
import { IHomeStoreState, IHomeStoreAction } from "../interfaces";

const initialStoreState: IHomeStoreState = {
  users: [],
  errorMsg: "",
};

const homeReducer = (
  state: IHomeStoreState = initialStoreState,
  action: IHomeStoreAction
): IHomeStoreState => {
  switch (action.type) {
    case GET_USER_LIST:
      return { ...state, users: action.payload };
    case HOME_ERROR:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
