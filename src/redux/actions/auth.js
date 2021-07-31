import * as actionTypes from '../actionTypes';

export const signInAction = (data) => {
  return {
    type: actionTypes.AUTH_SIGN_IN,
    payload: data,
  }
}

export const signUpAction = (data) => {
  return {
    type: actionTypes.AUTH_SIGN_UP,
    payload: data,
  }
}

export const signOutAction = () => {
  return {
    type: actionTypes.AUTH_SIGN_OUT
  }
}