import { createStore } from "redux";
import RootReducer from "../combineReducer";
import casual from "casual-browserify";

describe("Testing Store state from root reducers", () => {
  const initialStoreState = {
    home: {
      users: [],
      errorMsg: "",
    },
    login: {
      isLoggedIn: false,
      errorMsg: "",
      loggedInUser: {},
    },
  };
  const appStore = createStore(RootReducer);
  it("should initialize app store state with default state", () => {
    expect(appStore.getState()).toEqual(initialStoreState);
  });
});
