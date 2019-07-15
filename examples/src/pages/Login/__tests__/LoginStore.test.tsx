import { createStore } from "redux";
import loginReducer from "../store/loginReducer";
import * as ActionCreator from "../store/actions";
import casual from "casual-browserify";

describe("Testing Login module store and actions", () => {
  const initialStoreState = {
    isLoggedIn: false,
    errorMsg: "",
    loggedInUser: {},
  };
  const randomUser = {
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
  const expectedLoginState = {
    isLoggedIn: true,
    errorMsg: "",
    loggedInUser: randomUser,
  };

  const loginStore = createStore(loginReducer);
  it("should get the default state of the login module store", () => {
    expect(loginStore.getState()).toEqual(initialStoreState);
  });
  it("should update the login state with random user on login dispatch", () => {
    loginStore.dispatch(ActionCreator.login(randomUser));
    expect(loginStore.getState()).toEqual(expectedLoginState);
  });
  it("should be change to default state of the store when logout", () => {
    loginStore.dispatch(ActionCreator.logout());
    expect(loginStore.getState()).toEqual(initialStoreState);
  });
  it("should change the store state when error dispatch", () => {
    loginStore.dispatch(ActionCreator.loginError("Some error occurred !"));
    expect(loginStore.getState().errorMsg).toEqual("Some error occurred !");
  });
});
