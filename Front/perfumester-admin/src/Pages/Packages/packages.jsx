import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPackagesData } from '../../Redux/Packages/PackagesActions';
import PackagesDataTable from './DataTable/packagesDataTable';

const PackagesDetails = () => {
  const dispatch = useDispatch();
  const { packages } = useSelector((store) => store.packagesReducer);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    dispatch(getPackagesData());
  }, [dispatch]);

  return (
    <div className="w-full p-14">
      <div>
        <h1 className="text-4xl">Package Details</h1>
        <div className="mt-5">
          <select
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full text-white bg-transparent border rounded-md p-2"
          >
            <option className="text-black" value="all">
              All
            </option>
            <option className="text-black" value="standard">
              Standard
            </option>
            <option className="text-black" value="midrange">
              Midrange
            </option>
            <option className="text-black" value="highend">
              Highend
            </option>
          </select>
        </div>
        <div className="bg-black mt-5 p-10 rounded-lg">
          <PackagesDataTable
            selectedType={selectedType}
            dataEntered={packages.data}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesDetails;
