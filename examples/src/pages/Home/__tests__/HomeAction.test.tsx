import * as Actions from "../store/actions";

describe("Testing Login Actions", () => {
  it("should return login action type object", () => {
    const expectedGetUserListAction = {
      type: Actions.GET_USER_LIST,
      payload: [],
    };
    expect(Actions.getUser([])).toEqual(expectedGetUserListAction);
  });

  it("should return login error action type object", () => {
    const expectedErrorAction = {
      type: Actions.HOME_ERROR,
      payload: "Some error occurred !",
    };
    expect(Actions.showError("Some error occurred !")).toEqual(expectedErrorAction);
  });
});
