import axios from 'axios';
import { PackageAction } from './PackagesReducer';
import { toast } from 'react-toastify';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getPackagesData = () => async (dispatch) => {
  try {
    dispatch(PackageAction.getPackagesRequest());

    const _response = await axios.get(`${API_BASE_URL}/packages`);
    dispatch(PackageAction.getPackagesSuccess(_response.data));
  } catch (error) {
    dispatch(PackageAction.getPackagesFailure());
  }
};

export const editPackageData = (updatedPackage) => async (dispatch) => {
  try {
    if (!updatedPackage) {
      toast.error('Please enter all the fields');
      return;
    }
    dispatch(PackageAction.editPackagesRequest());
    const response = await axios.patch(
      `${API_BASE_URL}/packages/update/` + updatedPackage.id,
      updatedPackage
    );

    dispatch(PackageAction.editPackagesSuccess({ package: response }));
    dispatch(getPackagesData());
    toast.success('Package updated successfully');
  } catch (error) {
    dispatch(PackageAction.editPackagesFailure());
    toast.error(error.response.data.error);
  }
};

// export const editPackageActivity = (packageId, updatedData) => (dispatch) => {
//   try {
//     dispatch(PackageAction.editPackagesActivityRequest());
//     const response = axios.patch('url', { packageId, updatedData });
//     dispatch(PackageAction.editPackagesActivitySuccess(response));
//   } catch (error) {
//     dispatch(PackageAction.editPackagesActivityFailure());
//   }
// };
