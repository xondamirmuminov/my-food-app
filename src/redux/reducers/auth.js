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
    const hasProduct = state.product?.find(item => action.payload?._id == item?._id)
    if (hasProduct) {
      const updated = state.product.map(item => {
        if (item._id == action.payload._id) {
          return { ...item, amount: item.amount + 1 };
        }
        console.log(state.product)
      })
    }
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