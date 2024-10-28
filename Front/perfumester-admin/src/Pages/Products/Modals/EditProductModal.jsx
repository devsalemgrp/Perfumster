import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import {
  deleteProduct,
  updateProduct,
} from '../../../Redux/Perfumes/PerfumesActions';

const EditProductModal = ({ isOpenModal, closeModal, data }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [productPhoto, setProductPhoto] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [subscriptionCategory, setSubscriptionCategory] = useState('');
  const [category, setCategory] = useState('');
  const localhost = 'http://localhost:3001/';
  const dispatch = useDispatch();

  useEffect(() => {
    setProductName(data?.name);
    setDescription(data?.description);
    setPrice(data?.price);
    setStatus(data?.status);
    setProductPhoto(data?.image);
    setImagePreview(null);
    setCategory(data?.category);
    setSubscriptionCategory(data?.subscriptionCategory);

    console.log(data);
  }, [data]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProductPhoto(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(data.id));
    closeModal();
  };
  const handleSave = () => {
    dispatch(
      updateProduct(data.id, {
        productName,
        description,
        price,
        status,
        productPhoto,
        subscriptionCategory,
        category,
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
    <div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-full h-full p-5">
          <h1 className="text-center text-4xl mb-5">Edit Perfume</h1>

          <div className="flex justify-center mb-5">
            <img
              src={`${!imagePreview ? localhost + productPhoto : imagePreview}`}
              alt={productName}
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xl">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-xl">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
                rows="4"
              />
            </div>

            <div>
              <label className="block text-xl">Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-xl">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              >
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            <div>
              <label className="block text-xl">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-xl">Subscription Category</label>
              <select
                value={subscriptionCategory}
                onChange={(e) => setSubscriptionCategory(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              >
                <option value="Standard">Standard</option>
                <option value="MidRange">MidRange</option>
                <option value="HighEnd">HighEnd</option>
              </select>
            </div>

            <div>
              <label className="block text-xl">Change Product Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2 p-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>
          </form>

          <div className="flex justify-end mt-5 space-x-3">
            <button
              onClick={() => {
                handleDeleteProduct();
              }}
              className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
            >
              Delete
            </button>
            <button
              onClick={closeModal}
              className="px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditProductModal;
