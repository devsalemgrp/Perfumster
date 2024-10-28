import { perfumes, specialPerfumes } from "../../Shared/products";
import { ForHimPageAction } from "./ForHimReducers";
import axios from "axios";

export const getMenData = () => async (dispatch) => {
  try {
    dispatch(ForHimPageAction.getMenDataRequest());
    const response = await axios.get("http://localhost:3001/api/men");
    dispatch(ForHimPageAction.getMenDataSuccess(response.data));
  } catch (e) {
    dispatch(ForHimPageAction.getMenDataFailure(e.message));
  }
};

export const getRecommendedPerfumes = () => async (dispatch) => {
  try {
    dispatch(ForHimPageAction.getRecommendedPerfumesRequest());
    const response = specialPerfumes.filter(
      (perfume) => perfume.category === "male"
    );
    console.log({ RESPONSE: response });
    dispatch(ForHimPageAction.getRecommendedPerfumesSuccess(response));
  } catch (err) {
    dispatch(ForHimPageAction.getRecommendedPerfumesFailure(err.message));
  }
};

export const getSpecialPerfumes = () => async (dispatch) => {
  try {
    dispatch(ForHimPageAction.getSpecialProductsRequest());
    const response = await axios.get("url");
    dispatch(ForHimPageAction.getSpecialProductsSuccess(response));
  } catch (err) {
    dispatch(ForHimPageAction.getSpecialProductsFailure(err.message));
  }
};

export const getSpecialBackgrounds = () => async (dispatch) => {
  try {
    dispatch(ForHimPageAction.getSpecialBackgroundsRequest());
    const response = await axios.get("url");
    dispatch(ForHimPageAction.getSpecialBackgroundsSuccess(response));
  } catch (err) {
    dispatch(ForHimPageAction.getSpecialBackgroundsFailure(err.message));
  }
};

export const getHomeSectionBackgrounds = () => async (dispatch) => {
  try {
    dispatch(ForHimPageAction.getHomeSectionBackgroundsRequest());
    const response = await axios.get("url");
    dispatch(ForHimPageAction.getHomeSectionBackgroundsSuccess(response));
  } catch (err) {
    dispatch(ForHimPageAction.getHomeSectionBackgroundsFailure(err.message));
  }
};
