import React from "react";
import { shallow } from "enzyme";
import ExampleRoutes from "../index";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import PageNotFound from "../../pages/PageNotFound";

let pathMap: any;

describe("Testing Router with exact path", () => {
  beforeAll(() => {
    const component = shallow(<ExampleRoutes />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps: any = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  it("should show Home component for / router (getting array of routes)", () => {
    expect(pathMap["/"]).toBe(Home);
  });
  it("should show Home component for / router (getting array of routes)", () => {
    expect(pathMap["/login"]).toBe(Login);
  });
  it("should show No match component for route not defined", () => {
    expect(pathMap[undefined]).toBe(PageNotFound);
  });
});
