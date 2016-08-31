export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
};

export const signup = user => ({
  type: SessionConstants.SIGNUP,
  user
});

export const login = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});
