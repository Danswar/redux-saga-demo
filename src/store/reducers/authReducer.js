import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOADING
} from "../actions/authActions";

const initialState = {
  isLogin: false,
  isLoading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLogin: false
      };

    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};
