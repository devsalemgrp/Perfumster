import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Background1 from "../../Assets/Home/image.png";
import Background2 from "../../Assets/Home/image3.png";

import SwipeImages from "../../Assets/Home/image1.png";

import Footer1 from "../../Components/Footer1/footer1";
import SubscriptionModal from "../../Components/subscriptionModal";
import PackageCard from "../../Components/packageCard";
import { useDispatch, useSelector } from "react-redux";
import { getHomePageData } from "../../Redux/Home/HomeActions";
const localhost = "http://localhost:3001/";
const Home = () => {
  const [backgroundImages, setBackgroundImage] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { homePageData } = useSelector((store) => store.homeReducer);
  const [welcomeSection, setWelcomeSection] = useState([]);
  const [section2, setSection2] = useState([]);
  const [heroSection, setHeroSection] = useState([]);
  const [ctaSection, setCtaSection] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const packagesRef = useRef(null);

  useEffect(() => {
    dispatch(getHomePageData());
  }, [dispatch]);

  useEffect(() => {
    if (homePageData.data) {
      setWelcomeSection(
        homePageData.data.filter((data) => data.section === "welcome")
      );
      setSection2(
        homePageData.data.filter((data) => data.section === "section2")
      );
      setHeroSection(
        homePageData.data.filter((data) => data.section === "hero")
      );
      setCtaSection(homePageData.data.filter((data) => data.section === "cta"));
    }
  }, [homePageData]);

  useEffect(() => {
    console.log(homePageData);
  }, [homePageData]);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const scrollToTargetDiv = () => {
    if (packagesRef.current) {
      packagesRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top of the viewport
      });
    }
  };

  return (
    <div className="w-full text-white">
      <SubscriptionModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        subscription={subscription}
      />
      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          className="bg-[#313131]"
        >
          {welcomeSection.map((element, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full bg-cover bg-center py-20"
                style={{
                  backgroundImage: `url(${localhost + element.content})`,
                }}
              >
                <div className=" flex items-start justify-center">
                  <div className="w-full px-2 lg:px-0 lg:w-4/5 mx-auto pt-5 flex flex-col gap-2">
                    <h1 className="text-sm font-thin">
                      {
                        heroSection.find(
                          (element) => element.subsection === "h3Title"
                        ).content
                      }
                    </h1>
                    <h2 className=" text-6xl font-thin w-full lg:w-2/3 richmond">
                      {
                        heroSection.find(
                          (element) => element.subsection === "h1Title"
                        ).content
                      }
                    </h2>
                    <p className="w-1/3 hidden md:block font-thin opacity-80 text-sm">
                      {
                        heroSection.find(
                          (element) => element.subsection === "text"
                        ).content
                      }
                    </p>
                    <div className="flex flex-row gap-2 mt-5">
                      <Link to={"/products"}>
                        <div className="bg-white text-black p-1 px-2 font-thin text-sm cursor-pointer">
                          Explore our collection
                        </div>
                      </Link>

                      <Link to={"/about-us"}>
                        <div className="border p-1 px-2 font-thin text-sm cursor-pointer">
                          Who we are
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full body py-10">
        <div className="w-4/5 m-auto flex flex-col items-center justify-center gap-7 ">
          {/* Title */}
          <div className="text-white text-center text-5xl body_title">
            Find what you desire quickly
          </div>

          <div className="hidden md:flex flex-row gap-2 ">
            {section2.map((element, index) => (
              <div className=" flex-1 max-h-72 max-w-72 flex justify-center">
                <img
                  src={localhost + element.content}
                  className="w-full"
                  alt=""
                  key={index}
                />
              </div>
            ))}
            {/* <img src={localhost + section2} alt="" />
            <img
              src={localhost + section2}
              alt=""
              className="transform translate-y-3"
            />
            <img src={localhost + section2[2].content} alt="" /> */}
          </div>

          <div className="w-4/5 block md:hidden ">
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              pagination={{ clickable: true }}
              loop={true}
              className="w-full"
            >
              {section2.map((element, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={localhost + element.content}
                    className="w-full"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Start Shopping Button */}
          <Link to={"/products"}>
            <div className="start_shopping_button p-2 font-thin cursor-pointer">
              <span>Start shopping</span>
            </div>
          </Link>
        </div>

        <div className="w-4/5 m-auto mt-10 text-white flex flex-row gap-3 justify-center items-center">
          <PackageCard
            openModal={openModal}
            setSubscription={setSubscription}
            subscription={subscription}
          />
        </div>

        {/* Learn Now */}
        <div className=" w-full flex items-center justify-center mt-10">
          <Link to={"/subscription"}>
            <div className="text-black bg-white px-5 py-2 learn_now cursor-pointer">
              <span>Learn Now</span>
            </div>
          </Link>
        </div>
      </div>

      <Footer1 cta={ctaSection} scrollIntoView={scrollToTargetDiv} />
    </div>
  );
};

export default Home;
