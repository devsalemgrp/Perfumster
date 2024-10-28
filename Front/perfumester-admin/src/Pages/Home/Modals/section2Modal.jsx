import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';
import { useDispatch } from 'react-redux';
import {
  deleteSection2Image,
  replaceSection2Image,
} from '../../../Redux/HomePage/HomePageActions';

const Section2Modal = ({ isOpenModal, closeModal, data }) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const handleSelectedImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(replaceSection2Image(data.id, selectedImage));
    setSelectedImage(null);
    setImagePreview(null);
    closeModal('replaceImage');
  };

  const handleDeleteImage = (event) => {
    event.preventDefault();
    dispatch(deleteSection2Image(data.id));
    setSelectedImage(null);
    setImagePreview(null);
    closeModal('deleteImage');
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal.replaceImage}
        onRequestClose={() => closeModal('replaceImage')}
        style={customStyles}
      >
        <div className="text-white p-5">
          <h1 className="text-4xl text-center mb-4">Edit Section 2 Content</h1>
          <hr className="border-gray-500 mb-4" />

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h2 className="text-xl mb-2">Currently Displayed Image</h2>
              <div className="flex justify-center">
                <img
                  src={'http://localhost:3001/' + data.content}
                  alt="Current"
                  className="rounded shadow-lg"
                  width={200}
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl mb-2">Change Image</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="file"
                  onChange={handleSelectedImage}
                  className="border border-gray-400 rounded-lg p-2 bg-gray-800 text-white"
                />
                {imagePreview && (
                  <div className="flex justify-center">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      width={150}
                      className="rounded shadow-lg"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenModal.deleteImage}
        onRequestClose={() => closeModal('deleteImage')}
        style={customStyles}
      >
        <div className="flex flex-col items-center gap-7 text-white bg-[#313131] p-3">
          <h1 className="text-4xl text-center mb-4">Delete the Image</h1>
          <img
            src={'http://localhost:3001/' + data.content}
            alt="Delete Preview"
            width={200}
            className="rounded shadow-lg"
          />
          <button
            className="bg-red-500 text-white px-5 p-2 border rounded-lg w-1/2 hover:bg-red-600 transition-colors"
            onClick={(e) => {
              handleDeleteImage(e);
            }}
          >
            Yes, Delete
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Section2Modal;
