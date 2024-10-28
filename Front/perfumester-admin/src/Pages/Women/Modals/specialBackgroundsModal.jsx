import React from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';
import { useDispatch } from 'react-redux';
import { dISpecialBackgroundSection } from '../../../Redux/WomensPage/WomensPageActions';
const SpecialBackgroundsModals = ({ isOpenModal, closeModal, data }) => {
  const localHost = 'http://localhost:3001/';

  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(dISpecialBackgroundSection(data.id));
    closeModal('deleteImage');
  };
  return (
    <div>
      <Modal
        isOpen={isOpenModal.deleteImage}
        onRequestClose={() => closeModal('deleteImage')}
        style={customStyles}
      >
        <div className="flex flex-col items-center gap-7 text-white bg-[#313131] p-3">
          <h1 className="text-4xl text-center mb-4">Delete the Image</h1>
          <img
            src={localHost + data.content}
            alt="Delete Preview"
            width={200}
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

export default SpecialBackgroundsModals;
