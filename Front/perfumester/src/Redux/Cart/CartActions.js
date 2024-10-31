import { CartPageActions } from "./CartReducers";

export const getCartData = () => (dispatch) => {
  try {
    dispatch(CartPageActions.getCartDataRequest());
    dispatch(CartPageActions.getCartDataSuccess());
  } catch (err) {
    dispatch(CartPageActions.getCartDataFailure(err.message));
  }
};

export const addToCart = (perfume, quantity) => (dispatch) => {
  try {
    const item = { perfume, quantity };
    dispatch(CartPageActions.addToCartRequest());
    dispatch(CartPageActions.addToCartSuccess(item));
  } catch (err) {
    dispatch(CartPageActions.addToCartFailure(err.message));
  }
};

export const increaseQuantity = (item) => (dispatch) => {
  try {
    console.log("ITEM", item);
    dispatch(CartPageActions.increaseQuantityRequest());
    dispatch(CartPageActions.increaseQuantitySuccess(item));
  } catch (err) {
    dispatch(CartPageActions.increaseQuantityFailure(err.message));
  }
};

export const decreaseQuantity = (item) => (dispatch) => {
  try {
    console.log("ITEM", item);
    dispatch(CartPageActions.decreaseQuantityRequest());
    dispatch(CartPageActions.decreaseQuantitySuccess(item));
  } catch (err) {
    dispatch(CartPageActions.decreaseQuantityFailure(err.message));
  }
};

export const removeFromCart = (item) => (dispatch) => {
  try {
    dispatch(CartPageActions.removeFromCartRequest());
    dispatch(CartPageActions.removeFromCartSuccess(item));
  } catch (err) {
    dispatch(CartPageActions.removeFromCartFailure(err.message));
  }
};
