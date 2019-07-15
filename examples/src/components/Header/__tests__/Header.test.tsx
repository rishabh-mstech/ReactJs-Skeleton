import React from "react";
import Header from "../index";
import { Provider } from "react-redux";
import Store from "../../../store";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing the header component", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={Store}>
        <Router>
          <div>
            <Header />
          </div>
        </Router>
      </Provider>
    );
  });

  it("should mount with navigation links", () => {
    expect(wrapper.find(".nav-link").length).toEqual(8);
  });
});
