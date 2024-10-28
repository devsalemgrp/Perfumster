import axios from 'axios';
import { PerfumesAction } from './PerfumesReducer';
import { products } from '../../Shared/PerfumesPageData';
import { toast } from 'react-toastify';

export const getPerfumesData = () => async (dispatch) => {
  try {
    dispatch(PerfumesAction.getPerfumesRequest());
    const response = products;
    const _response = await axios.get('http://localhost:3001/api/products');
    dispatch(PerfumesAction.getPerfumesSuccess(_response.data.data));
  } catch (error) {
    dispatch(PerfumesAction.getPerfumesFailure());
    console.log(error);
    alert(error.message);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    if (
      !product.productPhoto ||
      !product.productName ||
      !product.price ||
      !product.description ||
      !product.status ||
      !product.subscriptionCategory ||
      !product.category
    ) {
      toast.error('Please fill all the fields');
      return;
    }
    dispatch(PerfumesAction.addProductRequest());
    const formData = new FormData();
    formData.append('name', product.productName);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('status', product.status);
    formData.append('image', product.productPhoto);
    formData.append('subscriptionCategory', product.subscriptionCategory);
    formData.append('category', product.category);
    const response = await axios.post(
      'http://localhost:3001/api/products/create',
      formData
    );
    dispatch(getPerfumesData());
    dispatch(PerfumesAction.addProductSuccess(response.data));
    toast.success('Product added successfully!');
  } catch (error) {
    dispatch(PerfumesAction.addProductFailure());
    console.log(error);
    alert(error.message);
  }
};

export const updateProduct = (productId, updatedData) => async (dispatch) => {
  try {
    dispatch(PerfumesAction.updateProductRequest());

    const formData = new FormData();
    formData.append('name', updatedData.productName);
    formData.append('price', updatedData.price);
    formData.append('description', updatedData.description);
    formData.append('status', updatedData.status);
    formData.append('image', updatedData.productPhoto);
    formData.append('subscriptionCategory', updatedData.subscriptionCategory);
    formData.append('category', updatedData.category);
    const response = await axios.patch(
      `http://localhost:3001/api/products/update/${productId}`,
      formData
    );
    dispatch(getPerfumesData());
    dispatch(PerfumesAction.updateProductSuccess(response.data));
  } catch (error) {
    dispatch(PerfumesAction.updateProductFailure());
    console.log(error);
    alert(error.message);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch(PerfumesAction.deleteProductRequest());
    const response = await axios.delete(
      `http://localhost:3001/api/products/delete/${productId}`
    );
    dispatch(getPerfumesData());
    dispatch(PerfumesAction.deleteProductSuccess(response.data));
    toast.success('Product deleted successfully');
  } catch (error) {
    dispatch(PerfumesAction.deleteProductFailure());
    toast.error(
      error?.response?.data?.error || 'Something went wrong. Please try again'
    );
  }
};
