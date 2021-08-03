import * as actionTypes from '../actionTypes';

const initialState = {
  user: {},
  token: null,
  product: [
    {
      name: '',
      price: null,
      salePrice: null,
      description: '',
      category: [],
      _id: null,
      image: null,
      rate: null,
      amount: 0,
    }
  ]
};

console.log('Component mouted');

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
  } else if (action.type === actionTypes.PRODUCT) {
    return {
      ...state,
      product: [
        ...state.product,
        {
          ...action.payload
        }
      ]
    }
  } else {
    return state;
  }
}

export default authReducer;