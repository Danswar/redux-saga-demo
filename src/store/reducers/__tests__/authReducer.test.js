import { authReducer } from "../authReducer";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "../../actions/authActions";

const initialState = {
  isLoading: false,
  isLogin: false
};

describe("authReducer", () => {
  it("Set initial state", () =>
    expect(authReducer(undefined, {})).toEqual(initialState));

  it("handles LOGIN_LOADING action", () => {
    let previusState = {
      ...initialState,
      isLoading: false
    };
    expect(
      authReducer(previusState, { type: LOGIN_LOADING, payload: true })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it("handles LOGIN_SUCCESS action", () => {
    let previusState = {
      ...initialState,
      isLoading: true
    };
    expect(authReducer(previusState, { type: LOGIN_SUCCESS })).toEqual({
      ...initialState,
      isLoading: false,
      isLogin: true
    });
  });

  it("handles LOGIN_FAILED action", () => {
    let previusState = {
      ...initialState,
      isLoading: true
    };
    expect(authReducer(previusState, { type: LOGIN_FAILED })).toEqual({
      ...initialState,
      isLoading: false,
      isLogin: false
    });
  });
});
