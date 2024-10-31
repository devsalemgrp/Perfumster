import { ProductsPageAction } from "./ProductsReducers";
import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(ProductsPageAction.getProductsRequest());
    const response = await axios.get(`${API_BASE_URL}/products`);
    dispatch(ProductsPageAction.getProductsSuccess(response.data));
  } catch (e) {
    dispatch(ProductsPageAction.getProductsFailure(e.message));
  }
};
