import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';
import { useDispatch } from 'react-redux';
import {
  aAIHomeSection,
  dIHomeSection,
} from '../../../Redux/NewPage/NewPageActions';

const HomeSectionModal = ({ isOpenModal, closeModal, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const localHost = 'http://localhost:3001/';
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(aAIHomeSection(selectedImage));
    _closeModal('addAnotherImage');
  };

  const onDelete = (event) => {
    event.preventDefault();
    dispatch(dIHomeSection(data.id));
    _closeModal('deleteImage');
  };

  const _closeModal = (type) => {
    setSelectedImage(null);
    setImagePreview(null);
    closeModal(type);
  };

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpenModal.addAnotherImage}
        onRequestClose={() => closeModal('addAnotherImage')}
      >
        <div className="flex flex-col gap-7 items-center text-white p-5">
          <h1 className="text-4xl text-center mb-4">Upload Image</h1>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="file"
              onChange={handleImageUpload}
              className="border border-gray-400 rounded-lg p-2 bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="p-2 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>

          {imagePreview && (
            <div className="mt-4 text-center">
              <h2 className="text-2xl mb-2">Image Preview:</h2>
              <img
                src={imagePreview}
                alt="Preview"
                width={150}
                className="rounded shadow-lg"
              />
            </div>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={isOpenModal.deleteImage}
        onRequestClose={() => closeModal('deleteImage')}
        style={customStyles}
      >
        <div className="flex flex-col items-center gap-7 text-white p-5">
          <h1 className="text-4xl text-center mb-4">Delete the Image</h1>
          <img
            src={localHost + data?.content}
            alt="Delete Preview"
            width={300}
            className="rounded shadow-lg"
          />
          <button
            className="bg-red-500 text-white px-5 p-2 border rounded-lg w-1/2 hover:bg-red-600 transition-colors"
            onClick={onDelete}
          >
            Yes, Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HomeSectionModal;
