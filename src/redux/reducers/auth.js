import * as actionTypes from '../actionTypes';

const initialState = {
  user: {},
  token: null,
};

const authReducer = (state = initialState, action) => {
  if (
    action.type === actionTypes.AUTH_SIGN_IN ||
    action.type === actionTypes.AUTH_SIGN_UP
  ) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    };
  } else if (action.type === actionTypes.AUTH_SIGN_OUT) {
    return initialState;
  } else {
    return state;
  }
}

export default authReducer;