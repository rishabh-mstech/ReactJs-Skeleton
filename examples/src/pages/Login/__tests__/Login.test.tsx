import React from "react";
import { Provider } from "react-redux";
import Store from "../../../store";
import Login from "../index";
import { mount } from "enzyme";

describe("Testing login component elements and actions", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={Store}>
        <Login />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should have two input box when mounted", () => {
    expect(wrapper.find(".form-input").length).toBe(2);
  });
  it("should have submit button", () => {
    const expected = wrapper.find(".submit-btn").length;
    expect(expected).toEqual(1);
  });
  it("Should take value in email input box", () => {
    wrapper
      .find("input[type='text']")
      .simulate("change", { target: { name: "email", value: "test@gmail.com" } });
    const expected = wrapper.find("#email").instance().value;
    expect(expected).toEqual("test@gmail.com");
  });

  it("Should take value in password input box", () => {
    wrapper
      .find("input[type='text']")
      .simulate("change", { target: { name: "password", value: "testing123" } });
    const expected = wrapper.find("#password").instance().value;
    expect(expected).toEqual("testing123");
  });
});
