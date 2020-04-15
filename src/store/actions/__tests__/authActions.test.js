import {
  LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGIN_LOADING,
  createLoginAction,
  createLoginRequestAction,
  createLoginSuccesAction,
  createLoginFailedAction,
  createLogutAction,
  createLoginLoadingAction
} from "./../authActions";

describe("authActions", () => {
  it("createLoginAction should create a correct", () => {
    expect(createLoginAction()).toEqual({ type: LOGIN });
  });
  it("createLoginRequestAction should create a correct", () => {
    expect(createLoginRequestAction()).toEqual({ type: LOGIN_REQUEST });
  });
  it("createLoginSuccesAction should create a correct", () => {
    expect(createLoginSuccesAction()).toEqual({ type: LOGIN_SUCCESS });
  });
  it("createLoginFailedAction should create a correct", () => {
    expect(createLoginFailedAction()).toEqual({ type: LOGIN_FAILED });
  });
  it("createLogutAction should create a correct", () => {
    expect(createLogutAction()).toEqual({ type: LOGOUT });
  });
  it("createLoginLoadingAction should create a correct", () => {
    expect(createLoginLoadingAction(true)).toEqual({
      type: LOGIN_LOADING,
      payload: true
    });
  });
});
