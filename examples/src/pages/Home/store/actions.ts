import axios, { AxiosResponse, AxiosError } from "axios";
import { GET_USER_API_URL } from "../../../common/constant";
import { ThunkAction } from "redux-thunk";
import { IGetUserAction, IHomeErrorAction } from "../interfaces";
import { IUser } from "../../../common/interfaces";

export const GET_USER_LIST = "GET_USER_LIST";
export const HOME_ERROR = "HOME_ERROR";

export const getUser = (data: IUser[] | [] | {}): IGetUserAction => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const showError = (data: string): IHomeErrorAction => {
  return {
    type: HOME_ERROR,
    payload: data,
  };
};

export const getUserApi = (): ThunkAction<void, any, null, any> => async dispatch => {
  await axios
    .get(GET_USER_API_URL)
    .then((response: AxiosResponse) => {
      dispatch(getUser(response.data));
    })
    .catch((error: AxiosError) => {
      console.log("Axios Error :- ", error);
      dispatch(showError("Unable to get user list. Please try again !"));
    });
};
