import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';
import { editHeroSection } from '../../../Redux/HomePage/HomePageActions';
import { useDispatch } from 'react-redux';

const HeroSectionModal = ({ isOpenModal, closeModal, data }) => {
  const [updatedData, setUpdatedData] = useState(data);
  const dispatch = useDispatch();

  const handleInputChange = (e, index, field) => {
    const newData = updatedData.map((item, i) =>
      i === index ? { ...item, [field]: e.target.value } : item
    );
    setUpdatedData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(editHeroSection(updatedData));
    closeModal();
  };

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="w-full h-full text-white p-3">
        <h1 className="text-4xl w-full text-center">Edit Hero Section</h1>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            {updatedData.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 mt-10">
                <div className="flex flex-col gap-1">
                  {/* Display subsection in the label */}
                  <label>{item.subsection}</label>

                  {/* Display content in the textarea */}
                  <textarea
                    type="text"
                    value={item.content}
                    onChange={(e) => handleInputChange(e, index, 'content')}
                    className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
                  />
                </div>
              </div>
            ))}
          </div>
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

export default HeroSectionModal;
