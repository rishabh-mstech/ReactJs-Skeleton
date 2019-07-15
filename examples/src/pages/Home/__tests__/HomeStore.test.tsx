import * as ActionCreator from "../store/actions";
import casual from "casual-browserify";
import { createStore } from "redux";
import homeReducer from "../store/homeReducer";
import { IUser } from "../../../common/interfaces";

describe("Testing Home module store and actions", () => {
  const initialStoreState = {
    users: [],
    errorMsg: "",
  };
  const userList: IUser[] = [];
  for (let i = 0; i <= 10; i++) {
    userList.push({
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
    });
  }
  const expectedUserListState = {
    users: userList,
    errorMsg: "",
  };

  const homeStore = createStore(homeReducer);
  it("should get the default state of the login module store", () => {
    expect(homeStore.getState()).toEqual(initialStoreState);
  });
  it("should update the login state with random user on login dispatch", () => {
    homeStore.dispatch(ActionCreator.getUser(userList));
    expect(homeStore.getState()).toEqual(expectedUserListState);
  });
  it("should change the store state when error dispatch", () => {
    homeStore.dispatch(ActionCreator.showError("Some error occurred !"));
    expect(homeStore.getState().errorMsg).toEqual("Some error occurred !");
  });
});
