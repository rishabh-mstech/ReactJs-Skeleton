import React from "react";
import Store from "../../../store";
import { Provider } from "react-redux";
import Home from "../index";
import { mount } from "enzyme";
import UserListRow from "../components/userListRow";
import casual from "casual-browserify";
import ExampleRoutes from "../../../routes";

describe("Testing Home page elements and action", () => {
  let wrapper: any;
  let componentWrapper: any;
  const dummyUser = {
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
  beforeEach(() => {
    wrapper = mount(
      <Provider store={Store}>
        <ExampleRoutes>
          <Home />
        </ExampleRoutes>
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should have welcome test when component appear or mounted", () => {
    expect(wrapper.find("#welcome-text").text()).toEqual("Welcome to Home Page !");
  });
  it("should render one element having <ol /> html entity", () => {
    componentWrapper = mount(<UserListRow user={dummyUser} />);
    expect(componentWrapper.find(".ol").length).toEqual(1);
    componentWrapper.unmount();
  });
});
