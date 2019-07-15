import * as Actions from "../store/actions";

describe("Testing Login Actions", () => {
  it("should return login action type object", () => {
    const expectedLoginAction = {
      type: Actions.LOGIN,
      payload: {},
    };
    expect(Actions.login({})).toEqual(expectedLoginAction);
  });

  it("should return login error action type object", () => {
    const expectedLoginAction = {
      type: Actions.LOGIN_ERROR,
      payload: "Some error occurred !",
    };
    expect(Actions.loginError("Some error occurred !")).toEqual(expectedLoginAction);
  });

  it("should return logout action type object", () => {
    const expectedLoginAction = {
      type: Actions.LOGOUT,
      payload: {},
    };
    expect(Actions.logout()).toEqual(expectedLoginAction);
  });
});
