import React, { useEffect, useState } from 'react';
import Heading from '../../Assets/New/heading.png';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPageData } from '../../Redux/NewPage/NewPageActions';
import HomeSectionModal from './Modals/homeSectionModal';

const New = () => {
  const dispatch = useDispatch();
  const { newPageData } = useSelector((store) => store.newPageReducer);
  const localHost = 'http://localhost:3001/';
  const [welcomeSection, setWelcomeSection] = useState([]);

  useEffect(() => {
    dispatch(getNewPageData());
  }, [dispatch]);

  useEffect(() => {
    if (newPageData.data) {
      setWelcomeSection(
        newPageData.data.filter((section) => section.section === 'welcome')
      );
    }
  }, [newPageData]);

  const [isOpenModal, setIsOpenModal] = useState({
    home: {
      addAnotherImage: false,
      deleteImage: false,
    },
  });

  const [welcomeSectionData, setWelcomeSectionData] = useState(null);
  const openWelcomeSectionModal = (modalType) => {
    setIsOpenModal((prevState) => ({
      ...prevState,
      home: {
        ...prevState.home,
        [modalType]: true,
      },
    }));
  };

  const closeWelcomeSectionModal = (modalType) => {
    setIsOpenModal((prevState) => ({
      ...prevState,
      home: {
        ...prevState.home,
        [modalType]: false,
      },
    }));
  };

  return (
    <div className="w-full p-20 flex flex-col gap-y-5">
      <HomeSectionModal
        isOpenModal={isOpenModal.home}
        closeModal={closeWelcomeSectionModal}
        data={welcomeSectionData}
      ></HomeSectionModal>

      <h1 className="text-4xl">New Page</h1>

      <div className="bg-black p-5 w-full flex flex-col gap-y-2 rounded-md ">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl">Home Section</h1>

          <div
            className="p-2 px-5 bg-[#323d4e] rounded-md flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => openWelcomeSectionModal('addAnotherImage')}
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
            <span>Add another image </span>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          {welcomeSection.map((element, index) => (
            <div className="border-2 flex flex-col gap-4 p-3">
              <img src={localHost + element.content} alt="background" />
              <div className="flex flex-row justify-between">
                <div className="border bg-[#282828] p-1 rounded-md cursor-pointer">
                  <span className="text-sm">Set as Image 1</span>
                </div>

                <div
                  className=" bg-white text-black px-2 flex items-center rounded-md cursor-pointer"
                  onClick={() => {
                    setWelcomeSectionData(element);
                    openWelcomeSectionModal('deleteImage');
                  }}
                >
                  <span className="text-sm">Delete</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;
