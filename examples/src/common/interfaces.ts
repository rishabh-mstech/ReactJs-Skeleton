import { IHomeStoreState } from "../pages/Home/interfaces";
import { ILoginStoreState } from "../pages/Login/interfaces";

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IGeo {
  lat: string | number;
  lng: string | number;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string | number;
  geo: IGeo;
}

export interface IUser {
  id: string | number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IReduxStoreState {
  home: IHomeStoreState;
  login: ILoginStoreState;
}
