import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';
import { useDispatch } from 'react-redux';
import { editCtaSectionData } from '../../../Redux/HomePage/HomePageActions';

const CallToActionModal = ({ isOpenModal, closeModal, data }) => {
  const [updatedData, setUpdatedData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const handleInputChange = (e, index, field) => {
    const newData = updatedData.map((item, i) =>
      i === index ? { ...item, [field]: e.target.value } : item
    );
    setUpdatedData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCtaSectionData(updatedData));
    setUpdatedData();
    closeModal('cta');
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => closeModal('cta')}
      style={customStyles}
    >
      <div className="w-full h-full p-5">
        <h1 className="text-4xl text-center mb-5">
          Edit Call To Action Section
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {updatedData.map((element, index) => (
            <div key={element} className="flex flex-col gap-2">
              <label className="text-lg">
                {element.subsection.charAt(0).toUpperCase() +
                  element.subsection.slice(1)}
              </label>
              <textarea
                value={element.content}
                onChange={(e) => handleInputChange(e, index, 'content')}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="button"
              className="mr-3 p-2 px-5 bg-red-600 text-white rounded-lg hover:bg-red-500"
              onClick={() => closeModal('cta')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 px-5 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CallToActionModal;
