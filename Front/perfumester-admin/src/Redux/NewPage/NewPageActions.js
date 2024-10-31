import axios from 'axios';
import { NewPageAction } from './NewPageReducer';
import { toast } from 'react-toastify';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getNewPageData = () => async (dispatch) => {
  try {
    dispatch(NewPageAction.getNewPageDataRequest());
    const response = await axios.get(`${API_BASE_URL}/new`);
    dispatch(NewPageAction.getNewPageDataSuccess(response.data));
  } catch (error) {
    dispatch(NewPageAction.getNewPageDataFailure());
    console.log(error);
    alert(error.message);
  }
};

export const aAIHomeSection = (image) => async (dispatch) => {
  try {
    if (!image) {
      toast.error('Please select an image');
      return;
    }
    dispatch(NewPageAction.aAIHomeSectionRequest());
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post(
      `${API_BASE_URL}/new/welcome-section/create`,
      formData
    );
    dispatch(NewPageAction.aAIHomeSectionSuccess(response));
    dispatch(getNewPageData());
    toast.success('Image uploaded successfully');
  } catch (err) {
    dispatch(NewPageAction.aAIHomeSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};

export const dIHomeSection = (imageId) => async (dispatch) => {
  try {
    dispatch(NewPageAction.dIHomeSectionRequest());
    const response = await axios.delete(
      `${API_BASE_URL}/new/welcome-section/delete/` + imageId
    );
    dispatch(NewPageAction.dIHomeSectionSuccess(response));
    dispatch(getNewPageData());
    toast.success('Image deleted successfully');
  } catch (err) {
    dispatch(NewPageAction.dIHomeSectionFailure(err.message));
    toast.error(err.response.data.error);
  }
};
