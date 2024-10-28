import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editPackageData } from '../../../Redux/Packages/PackagesActions';

const EditPackageModal = ({ isOpenModal, closeModal, data }) => {
  const [updatedData, setUpdatedData] = useState({
    package_name: '',
    price: 0,
    description: '',
    scents_number: 0,
    package_type: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setUpdatedData({
        package_name: data.package_name,
        price: data.price,
        description: data.description,
        scents_number: data.scents_number,
        package_type: data.package_type,
      });
    }
  }, [data]);

  const handleInputChange = (field, value) => {
    console.log({ field, value });
    setUpdatedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const onSubmit = () => {
    console.log({ UPDATEDDATA: updatedData });

    dispatch(
      editPackageData({
        ...updatedData,
        id: data.id,
      })
    );
    closeModal();
  };

  const customStyles = {
    content: {
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#313131',
      color: 'white',
      borderRadius: '10px',
    },
    overlay: {
      zIndex: 1000, // Ensure modal is on top
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="w-full h-full p-5">
        <h1 className="text-center text-4xl mb-5">Edit Perfume Package</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-xl">Package Name</label>
            <input
              type="text"
              value={updatedData.package_name}
              onChange={(e) =>
                handleInputChange('package_name', e.target.value)
              }
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-xl">Package Type</label>
            <select
              value={updatedData.package_type}
              onChange={(e) =>
                handleInputChange('package_type', e.target.value)
              }
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
            >
              <option value="Standard">Standard</option>
              <option value="Midrange">Midrange</option>
              <option value="Highend">Highend</option>
            </select>
          </div>

          <div>
            <label className="block text-xl">Price ($)</label>
            <input
              type="number"
              value={updatedData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-xl">Scents Number</label>
            <input
              type="number"
              value={updatedData.scents_number}
              onChange={(e) =>
                handleInputChange('scents_number', e.target.value)
              }
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-xl">Description</label>
            <textarea
              value={updatedData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              rows="4"
            />
          </div>
        </form>

        <div className="flex justify-end mt-5 space-x-3">
          <button
            onClick={closeModal}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditPackageModal;
