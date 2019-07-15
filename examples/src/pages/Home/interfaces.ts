import { GET_USER_LIST, HOME_ERROR } from "./store/actions";
import { IUser } from "../../common/interfaces";

export interface IProps {
  getUserApi: () => void;
  users: IUser[];
  errorMsg: string;
  isLoggedIn: boolean;
}

export interface IState {}

export interface IRowProps {
  user: IUser;
}

export interface IHomeStoreState {
  users: IUser[] | [] | {};
  errorMsg: string;
}

export type IHomeStoreAction = IGetUserAction | IHomeErrorAction;

export interface IGetUserAction {
  type: typeof GET_USER_LIST;
  payload: IUser[] | {} | [];
}

export interface IHomeErrorAction {
  type: typeof HOME_ERROR;
  payload: string;
}
