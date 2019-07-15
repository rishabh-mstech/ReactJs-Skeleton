import { ILoginAction, ILoginErrorAction, ILogoutAction } from "../interfaces";
import { ThunkAction } from "redux-thunk";
import casual from "casual-browserify";
import { IUser } from "../../../common/interfaces";

export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

export const login = (data: any): ILoginAction => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const loginError = (data: string): ILoginErrorAction => {
  return {
    type: LOGIN_ERROR,
    payload: data,
  };
};

export const logout = (): ILogoutAction => {
  return {
    type: LOGOUT,
    payload: {},
  };
};

export const doLogin = (
  email: string,
  password: string
): ThunkAction<void, any, null, any> => dispatch => {
  if (email !== "karvin" && password !== "111") {
    const response: IUser = {
      username: casual.username,
      id: casual.uuid,
      name: casual.name,
      email: casual.email,
      website: casual.url,
      phone: casual.phone,
      address: {
        city: casual.city,
        street: casual.street,
        zipcode: casual.zip({ digits: 6 }),
        suite: casual.text,
        geo: {
          lat: casual.latitude,
          lng: casual.longitude,
        },
      },
      company: {
        name: casual.company_name,
        bs: casual.company_suffix,
        catchPhrase: casual.catch_phrase,
      },
    };
    dispatch(login(response));
  } else {
    dispatch(loginError("Invalid user login. Please try again !"));
  }
};

export const doLogout = (): ThunkAction<void, any, null, any> => dispatch => {
  dispatch(logout());
};
