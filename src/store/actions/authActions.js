export const LOGIN = "[Auth] Login";
export const LOGIN_REQUEST = "[Auth] Login request";
export const LOGIN_SUCCESS = "[Auth] Login success";
export const LOGIN_FAILED = "[Auth] Login failed";
export const LOGOUT = "[Auth] Loging out";
export const LOGIN_LOADING = "[Auth] Login loading";

export const createLoginAction = () => ({
  type: LOGIN
});

export const createLoginRequestAction = () => ({
  type: LOGIN_REQUEST
});

export const createLoginSuccesAction = () => ({
  type: LOGIN_SUCCESS
});

export const createLoginFailedAction = () => ({
  type: LOGIN_FAILED
});

export const createLogutAction = () => ({
  type: LOGOUT
});

export const createLoginLoadingAction = isLoading => ({
  type: LOGIN_LOADING,
  payload: isLoading
});
