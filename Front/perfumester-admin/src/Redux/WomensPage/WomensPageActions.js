import axios from 'axios';
import { WomenPageAction } from './WomensPageReducer';
import { toast } from 'react-toastify';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getWomenPageData = () => async (dispatch) => {
  try {
    dispatch(WomenPageAction.getWomenPageDataRequest());
    const _response = await axios.get(`${API_BASE_URL}/women`);
    dispatch(WomenPageAction.getWomenPageDataSuccess(_response.data));
  } catch (error) {
    dispatch(WomenPageAction.getWomenPageDataFailure());
    alert(error.message);
  }
};

export const aAIHomeSection = (image) => async (dispatch) => {
  try {
    dispatch(WomenPageAction.aAIHomeSectionRequest());
    const formaData = new FormData();
    formaData.append('image', image);
    const response = await axios.post(
      `${API_BASE_URL}/women/home-section/create`,
      formaData
    );
    dispatch(WomenPageAction.aAIHomeSectionSuccess(response));
    dispatch(getWomenPageData());
    toast.success('Image uploaded successfully');
  } catch (err) {
    dispatch(WomenPageAction.aAIHomeSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const dIHomeSection = (imageId) => async (dispatch) => {
  try {
    dispatch(WomenPageAction.dIHomeSectionRequest());
    const response = await axios.delete(
      `${API_BASE_URL}/women/home-section/delete/` + imageId
    );
    dispatch(WomenPageAction.dIHomeSectionSuccess(response));
    dispatch(getWomenPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(WomenPageAction.dIHomeSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const rIRecommendedSection = (imageId, newImage) => async (dispatch) => {
  try {
    dispatch(WomenPageAction.rIRecommendedSectionRequest());
    const formData = new FormData();
    formData.append('image', newImage);
    const response = await axios.patch(
      `${API_BASE_URL}/women/recommended-section/update/` + imageId,
      formData
    );
    dispatch(WomenPageAction.rIRecommendedSectionSuccess(response));
    dispatch(getWomenPageData());
    toast.success('Image updated successfully');
  } catch (err) {
    dispatch(WomenPageAction.rIRecommendedSectionFailure(err.message));
    toast.error(err.message.data.error);
  }
};

export const dIRecommendedSection = (imageId) => async (dispatch) => {
  try {
    dispatch(WomenPageAction.dIRecommendedSectionRequest());
    const response = await axios.delete(
      `${API_BASE_URL}/women/recommended-section/delete/` + imageId
    );
    dispatch(WomenPageAction.dIRecommendedSectionSuccess(response));
    dispatch(getWomenPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(WomenPageAction.dIRecommendedSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const rISpecialSection = (imageId, newImage) => async (dispatch) => {
  try {
    dispatch(WomenPageAction.rISpecialSectionRequest());
    const formData = new FormData();
    formData.append('image', newImage);
    const response = await axios.patch(
      `${API_BASE_URL}/women/special-perfumes-section/update/` + imageId,
      formData
    );
    dispatch(WomenPageAction.rISpecialSectionSuccess(response));
    dispatch(getWomenPageData());
    toast.success('Image updated successfully');
  } catch (err) {
    dispatch(WomenPageAction.rISpecialSectionFailure(err.message));
    toast.error(err.message.data.error);
  }
};

export const dISpecialSection = (imageId) => async (dispatch) => {
  try {
    dispatch(WomenPageAction.dISpecialSectionRequest());

    const response = await axios.delete(
      `${API_BASE_URL}/women/special-perfumes-section/delete/` + imageId
    );
    dispatch(WomenPageAction.dISpecialSectionSuccess(response));
    dispatch(getWomenPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(WomenPageAction.dISpecialSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const dISpecialBackgroundSection = (imageId) => async (dispatch) => {
  try {
    dispatch(WomenPageAction.dISpecialBackgroundSectionRequest());
    const response = await axios.delete(
      `${API_BASE_URL}/women/special-backgrounds-section/delete/` + imageId
    );
    dispatch(WomenPageAction.dISpecialBackgroundSectionSuccess(response));
    dispatch(getWomenPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(WomenPageAction.dISpecialBackgroundSectionFailure(err.message));
    toast.error(err.message.data.error);
  }
};
