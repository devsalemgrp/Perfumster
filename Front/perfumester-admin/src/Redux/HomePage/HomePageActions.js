import axios from 'axios';
import { HomePageAction } from './HomePageReducer';
import { toast } from 'react-toastify';

export const getHomePageData = () => async (dispatch) => {
  try {
    dispatch(HomePageAction.getHomePageDataRequest());
    const response = await axios.get('http://localhost:3001/api/home');
    dispatch(HomePageAction.getHomePageDataSuccess(response.data));
  } catch (error) {
    dispatch(HomePageAction.getHomePageDataFailure());
  }
};

export const aAIHomeSection = (image) => async (dispatch) => {
  try {
    if (!image) {
      toast.error('Please select an image');
      return;
    }
    dispatch(HomePageAction.aAIHomeSectionRequest());
    const formData = new FormData();
    formData.append('image', image);
    formData.append('section', 'welcome');
    const response = await axios.post(
      'http://localhost:3001/api/home/welcome-section/create',
      formData
    );
    dispatch(getHomePageData());
    dispatch(HomePageAction.aAIHomeSectionSuccess(response));
    toast.success('Image added successfully!');
  } catch (err) {
    dispatch(HomePageAction.aAIHomeSectionFailure(err.message));
    toast.error(err?.response?.data?.error);
  }
};

export const dIHomeSection = (imageId) => async (dispatch) => {
  try {
    dispatch(HomePageAction.dIHomeSectionRequest());

    const response = await axios.delete(
      'http://localhost:3001/api/home/welcome-section/delete/' + imageId
    );
    dispatch(getHomePageData());
    dispatch(HomePageAction.dIHomeSectionSuccess(response));
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(HomePageAction.dIHomeSectionFailure(err.message));
    toast.error(err.message);
  }
};

export const editHeroSection = (updatedData) => async (dispatch) => {
  try {
    if (!updatedData || updatedData.length === 0) {
      toast.error('Error Occurred...');
      return;
    }
    dispatch(HomePageAction.editHeroSectionRequest());
    const response = await axios.patch(
      'http://localhost:3001/api/home/hero-section/update',
      updatedData
    );

    dispatch(getHomePageData());
    dispatch(HomePageAction.editHeroSectionSuccess(response));
    toast.success('Hero section updated successfully');
  } catch (err) {
    dispatch(HomePageAction.editHeroSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const replaceSection2Image =
  (prevImageId, newImage) => async (dispatch) => {
    try {
      if (!newImage) {
        toast.error('Please select an image');
        return;
      }
      dispatch(HomePageAction.replaceSection2ImageRequest());

      const formData = new FormData();
      formData.append('image', newImage);
      const response = await axios.patch(
        'http://localhost:3001/api/home/section2-section/update/' + prevImageId,
        formData
      );

      dispatch(HomePageAction.replaceSection2ImageSuccess(response));
      dispatch(getHomePageData());
      toast.success('Image updated successfully');
    } catch (err) {
      dispatch(HomePageAction.replaceSection2ImageFailure(err.message));
      toast.error(err.response.data.error);
    }
  };

export const deleteSection2Image = (imageId) => async (dispatch) => {
  try {
    dispatch(HomePageAction.deleteSection2ImageRequest());

    const response = await axios.delete(
      'http://localhost:3001/api/home/section2-section/delete/' + imageId
    );
    dispatch(HomePageAction.deleteSection2ImageSuccess(response));
    dispatch(getHomePageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(HomePageAction.deleteSection2ImageFailure(err.message));
  }
};

export const editCtaSectionData = (updatedData) => async (dispatch) => {
  try {
    dispatch(HomePageAction.editCtaSectionRequest());
    /**Implementation */
    const response = await axios.patch(
      'http://localhost:3001/api/home/cta-section/update',
      updatedData
    );
    dispatch(getHomePageData());
    dispatch(HomePageAction.editCtaSectionSuccess(response));
    toast.success('CTA Section updated successfully');
  } catch (err) {
    dispatch(HomePageAction.editCtaSectionFailure(err.message));
  }
};
