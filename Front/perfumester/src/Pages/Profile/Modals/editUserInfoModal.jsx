import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import {
  getProfileData,
  updateUserInfo,
} from "../../../Redux/Profile/ProfileActions";

const EditUserInfoModal = ({
  isOpen,
  closeModal,
  profileData: userData,
  dispatchUpdate,
}) => {
  const [email, setEmail] = useState(userData?.email);
  const [image, setImage] = useState(userData?.image);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phone_number);
  const [dateOfBirth, setDateOfBirth] = useState(userData?.date_of_birth);
  const [country, setCountry] = useState(userData?.country);
  const [profession, setProfession] = useState(userData?.profession);
  const [_, setPassword] = useState(userData?.password);
  const dispatch = useDispatch();
  useEffect(() => {
    setEmail(userData?.email);
    setImage(userData?.profileImage);
    setPhoneNumber(userData?.phone_number);
    const formattedDate = userData?.date_of_birth
      ? new Date(userData.date_of_birth).toISOString().split("T")[0]
      : "";
    setDateOfBirth(formattedDate);
    setCountry(userData?.country);
    setProfession(userData?.profession);
    setPassword(userData?.password);
  }, [userData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEditUserInfo = (e) => {
    e.preventDefault();
    const updatedInfo = {
      id: 4,
      profileImage: image,
      phoneNumber,
      dateOfBirth,
      country,
      profession,
    };
    dispatch(updateUserInfo(updatedInfo));

    closeModal();
  };

  const customStyles = {
    content: {
      margin: "auto",
      padding: "20px",
      backgroundColor: "#313131",
      color: "white",
      borderRadius: "10px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
        <div className="bg-[#1D1D1D] rounded-md flex flex-col lg:flex-row gap-3 p-5 helvetica">
          <div className="lg:w-1/3 flex flex-col justify-center items-center">
            <div className="rounded-full">
              <img src={image} alt="" width={200} className="rounded-full" />
            </div>
            <input
              type="file"
              accept="image/*"
              className="mt-2 text-white"
              onChange={handleImageChange}
            />
            <span className="text-white">{"Moustafa"}</span>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-2 text-white">
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex-1 flex flex-col">
                <h1>Email</h1>
                <div className="bg-white rounded-md py-1 text-black pl-2 opacity-60">
                  {email}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h1>Phone Number</h1>
                <input
                  type="text"
                  className="bg-white rounded-md py-1 text-black pl-2"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex-1 flex flex-col">
                <h1>Date of Birth</h1>
                <input
                  type="date"
                  className="bg-white rounded-md py-1 text-black pl-2"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h1>Country</h1>
                <input
                  type="text"
                  className="bg-white rounded-md py-1 text-black pl-2"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex-1 flex flex-col">
                <h1>Profession</h1>
                <input
                  type="text"
                  className="bg-white rounded-md py-1 text-black pl-2"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h1>Password</h1>
                <div className="bg-white rounded-md py-1 text-black pl-2 opacity-60">
                  ********
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={handleEditUserInfo}
          >
            Save Changes
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md ml-2"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EditUserInfoModal;
