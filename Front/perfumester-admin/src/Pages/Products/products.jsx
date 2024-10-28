import React, { useEffect, useState } from 'react';
import ReactDataTable from './DataTable/productDataTable';
import { useDispatch, useSelector } from 'react-redux';
import { getPerfumesData } from '../../Redux/Perfumes/PerfumesActions';
import AddProductModal from './Modals/AddProductModal';

const Products = () => {
  const dispatch = useDispatch();
  const { perfumes } = useSelector((state) => state.perfumesReducer);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  useEffect(() => {
    dispatch(getPerfumesData());
  }, [dispatch]);

  return (
    <div className="w-full p-14">
      <AddProductModal
        isOpenModal={isAddModalOpen}
        closeModal={closeAddModal}
      ></AddProductModal>
      <div>
        <h1 className="text-4xl">Product Stock</h1>
        <div className="bg-black mt-10 p-10 rounded-lg">
          <div className="flex flex-row items-center justify-between mb-10">
            <h1 className="text-3xl">My Stock</h1>

            <div
              className="p-2 px-5 bg-[#323d4e] rounded-md flex flex-row gap-2 items-center cursor-pointer"
              onClick={() => setIsAddModalOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
              >
                <path
                  d="M9 5.75712H5.14286V9.61426H3.85714V5.75712H0V4.4714H3.85714V0.614258H5.14286V4.4714H9V5.75712Z"
                  fill="white"
                  style={{ fill: 'white', fillOpacity: 1 }}
                />
              </svg>
              <span>Add Product </span>
            </div>
          </div>

          <ReactDataTable dataEntered={perfumes} />
        </div>
      </div>
    </div>
  );
};

export default Products;
