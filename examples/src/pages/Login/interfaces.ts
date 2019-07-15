import { LOGIN, LOGIN_ERROR, LOGOUT } from "./store/actions";
import { IUser } from "../../common/interfaces";

export interface IProps {
  login: (email: string, password: string) => void;
  errorMsg: string;
  isLoggedIn: boolean;
  history?: any;
}

export interface IState {
  email: string;
  password: string;
  errorMsg: string;
  errorFor: string;
}

export interface ILoginAction {
  type: typeof LOGIN;
  payload: IUser | {};
}

export interface ILoginErrorAction {
  type: typeof LOGIN_ERROR;
  payload: string;
}

export interface ILogoutAction {
  type: typeof LOGOUT;
  payload: {} | null;
}

export type ILoginStoreAction = ILoginAction | ILoginErrorAction | ILogoutAction;

export interface ILoginStoreState {
  isLoggedIn: boolean;
  loggedInUser: IUser | {};
  errorMsg: string;
}
