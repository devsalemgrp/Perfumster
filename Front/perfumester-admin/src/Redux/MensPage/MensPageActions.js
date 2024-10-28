import axios from 'axios';
import { MensPageAction } from './MensPageReducer';
import { mensPageData } from '../../Shared/MensPageData';
import { toast } from 'react-toastify';

export const getMensPageData = () => async (dispatch) => {
  try {
    dispatch(MensPageAction.getMenPageDataRequest());

    const response = await axios.get('http://localhost:3001/api/men');
    dispatch(MensPageAction.getMenPageDataSuccess(response.data));
  } catch (error) {
    dispatch(MensPageAction.getMenPageDataFailure());
    console.log(error);
    alert(error.message);
  }
};

export const aAIHomeSection = (image) => async (dispatch) => {
  if (!image) {
    toast.error('Please select an image');
    return;
  }
  try {
    dispatch(MensPageAction.aAIHomeSectionRequest());
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post(
      'http://localhost:3001/api/men/home-section/create',
      formData
    );
    dispatch(MensPageAction.aAIHomeSectionSuccess(response));
    dispatch(getMensPageData());
    toast.success('Image uploaded successfully');
  } catch (err) {
    dispatch(MensPageAction.aAIHomeSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const dIHomeSection = (imageId) => async (dispatch) => {
  try {
    dispatch(MensPageAction.dIHomeSectionRequest());
    const response = await axios.delete(
      'http://localhost:3001/api/men/home-section/delete/' + imageId
    );
    dispatch(MensPageAction.dIHomeSectionSuccess(response));
    dispatch(getMensPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(MensPageAction.dIHomeSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const rIRecommendedSection = (imageId, newImage) => async (dispatch) => {
  try {
    dispatch(MensPageAction.rIRecommendedSectionRequest());
    const formData = new FormData();
    formData.append('image', newImage);
    const response = await axios.patch(
      'http://localhost:3001/api/men/recommended-section/update/' + imageId,
      formData
    );
    dispatch(MensPageAction.rIRecommendedSectionSuccess(response));
    toast.success('Image updated successfully');
  } catch (err) {
    dispatch(MensPageAction.rIRecommendedSectionFailure(err.message));
    dispatch(getMensPageData());
    toast.error(err.response.data.error);
  }
};

export const dIRecommendedSection = (imageId) => async (dispatch) => {
  try {
    dispatch(MensPageAction.dIRecommendedSectionRequest());
    const response = await axios.delete(
      'http://localhost:3001/api/men/recommended-section/delete/' + imageId
    );
    dispatch(MensPageAction.dIRecommendedSectionSuccess(response));
    dispatch(getMensPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(MensPageAction.dIRecommendedSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const rISpecialSection = (imageId, newImage) => async (dispatch) => {
  try {
    dispatch(MensPageAction.rISpecialSectionRequest());
    const formData = new FormData();
    formData.append('image', newImage);
    const response = await axios.patch(
      'http://localhost:3001/api/men/special-perfumes-section/update/' +
        imageId,
      formData
    );
    dispatch(MensPageAction.rISpecialSectionSuccess(response));
    dispatch(getMensPageData());
    toast.success('Image updated successfully');
  } catch (err) {
    dispatch(MensPageAction.rISpecialSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const dISpecialSection = (imageId) => async (dispatch) => {
  try {
    dispatch(MensPageAction.dISpecialSectionRequest());
    const response = await axios.delete(
      'http://localhost:3001/api/men/special-perfumes-section/delete/' + imageId
    );
    dispatch(MensPageAction.dISpecialSectionSuccess(response));
    dispatch(getMensPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(MensPageAction.dISpecialSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const dISpecialBackgroundSection = (imageId) => async (dispatch) => {
  try {
    dispatch(MensPageAction.dISpecialBackgroundSectionRequest());
    const response = await axios.delete(
      'http://localhost:3001/api/men/special-backgrounds-section/delete/' +
        imageId
    );
    dispatch(MensPageAction.dISpecialBackgroundSectionSuccess(response));
    dispatch(getMensPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(MensPageAction.dISpecialBackgroundSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};
