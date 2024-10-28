import { perfumes } from "../../Shared/products";
import { ProductsPageAction } from "./ProductsReducers";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(ProductsPageAction.getProductsRequest());
    const response = await axios.get("http://localhost:3001/api/products");
    dispatch(ProductsPageAction.getProductsSuccess(response.data));
  } catch (e) {
    dispatch(ProductsPageAction.getProductsFailure(e.message));
  }
};
