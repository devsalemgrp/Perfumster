import React, { useEffect, useRef, useState } from "react";
import PackageCard from "../../Components/packageCard";
import Perfume1 from "../../Assets/Test_perfumes/perfume1.png";
import Perfume2 from "../../Assets/Test_perfumes/perfume2.png";
import Perfume3 from "../../Assets/Test_perfumes/perfume3.png";
import Perfume4 from "../../Assets/Test_perfumes/perfume4.png";
import Perfume5 from "../../Assets/Test_perfumes/perfume5.png";
import Perfume6 from "../../Assets/Test_perfumes/perfume6.png";
import Perfume7 from "../../Assets/Test_perfumes/perfume7.png";
import Perfume8 from "../../Assets/Test_perfumes/perfume8.png";
import Line from "../../Assets/Subscription/Line 30.png";
import Group_1 from "../../Assets/Subscription/Group_1.png";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SubscriptionModal from "../../Components/subscriptionModal";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/ProductsActions";
import PerfumeCard from "../../Components/perfumeCard";

const localHost = "http://localhost:3001/";

const SwipingElement = ({ perfume }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-stretch justify-center w-[250px]">
      {" "}
      {/* Set a fixed width for the entire card */}
      <div className="bg-[#454545] w-full h-[300px] flex items-center justify-center p-4">
        {" "}
        {/* Set a fixed height and width for the image container */}
        <img
          src={localHost + perfume?.image}
          alt={perfume?.name}
          width={200}
          className=" h-full object-cover"
        />{" "}
        {/* Make the image cover the div while keeping its aspect ratio */}
      </div>
      <div className="w-full flex flex-col justify-between items-center text-white px-3 pt-2">
        <h1 className="helvetica">{perfume?.name.slice(0, 20)}</h1>
        <div
          className="card_button p-1 cursor-pointer helvetica text-sm"
          onClick={() => navigate("/addToCart", { state: { perfume } })}
        >
          Learn more
        </div>
      </div>
    </div>
  );
};

const Subscription = () => {
  const [clicked, setClicked] = useState("MidRange");
  const [swipe, setSwipe] = useState("");
  const [perfumes, setPerfumes] = useState([]);

  const packagesRef = useRef(null);
  const swiperRef_desktop = useRef(null);
  const swiperRef_mobile = useRef(null);

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.data) {
      setPerfumes(products.data);
    }
    console.log({ products: products });
  }, [products]);

  useEffect(() => {
    console.log({ PERFUMES: perfumes });
  }, [perfumes]);

  // const perfumes = [
  //   {
  //     name: "Perfume 1",
  //     image: Perfume1, // Replace with your image path
  //     price: 49.99,
  //   },
  //   {
  //     name: "Perfume 2",
  //     image: Perfume2, // Replace with your image path
  //     price: 59.99,
  //   },
  //   {
  //     name: "Perfume 3",
  //     image: Perfume3, // Replace with your image path
  //     price: 45.0,
  //   },
  //   {
  //     name: "Perfume 4",
  //     image: Perfume4, // Replace with your image path
  //     price: 79.99,
  //   },
  //   {
  //     name: "Perfume 5",
  //     image: Perfume5, // Replace with your image path
  //     price: 39.99,
  //   },
  //   {
  //     name: "Perfume 6",
  //     image: Perfume6, // Replace with your image path
  //     price: 85.5,
  //   },
  //   {
  //     name: "Perfume 7",
  //     image: Perfume7, // Replace with your image path
  //     price: 60.0,
  //   },
  //   {
  //     name: "Perfume 8",
  //     image: Perfume8, // Replace with your image path
  //     price: 72.25,
  //   },
  // ];

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [subscription, setSubscription] = useState({
    name: "",
    type: "MidRange",
    price: "",
  });

  const scrollToTargetDiv = () => {
    if (packagesRef.current) {
      packagesRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top of the viewport
      });
    }
  };

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const slideNext_desktop = () => {
    if (swiperRef_desktop.current) {
      swiperRef_desktop.current.swiper.slideNext();
    }
  };

  const slidePrev_desktop = () => {
    if (swiperRef_desktop.current) {
      swiperRef_desktop.current.swiper.slidePrev();
    }
  };

  const slideNext_mobile = () => {
    if (swiperRef_mobile.current) {
      swiperRef_mobile.current.swiper.slideNext();
    }
  };

  const slidePrev_mobile = () => {
    if (swiperRef_mobile.current) {
      swiperRef_mobile.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <SubscriptionModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        subscription={subscription}
      />

      <div ref={packagesRef} className="bg-[#313131] pt-10 pb-10">
        <div className="w-4/5 m-auto mt-10 text-white flex flex-row gap-3 justify-center items-center">
          <PackageCard
            openModal={openModal}
            setSubscription={setSubscription}
          />
        </div>

        {/* Desktop Part */}
        <div className="lg:block hidden mt-9">
          <div className="w-11/12 mx-auto mt-5 justify-between items-center flex flex-row">
            <h1 className="text-4xl text-white richmond_display">
              Our Midrange perfumes
            </h1>

            <div className="flex flex-row gap-2 ">
              <div
                className={`
                      ${swipe === "left" ? "bg-white" : "bg-transparent"}
                      rounded-l-2xl rounded-r-2xl  w-11 flex items-center justify-center border cursor-pointer`}
                onClick={() => {
                  slidePrev_desktop();
                  setSwipe("left");
                }}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="mdi:chevron-left">
                    <path
                      id="Vector"
                      d="M16.3766 16.6862L11.7966 12.1062L16.3766 7.5162L14.9666 6.1062L8.96655 12.1062L14.9666 18.1062L16.3766 16.6862Z"
                      fill="white"
                      style={{
                        fill: `${swipe === "left" ? "black" : "white"}`,
                        fillOpacity: 1,
                      }}
                    />
                  </g>
                </svg>
              </div>

              <div
                className={`
                      ${swipe === "right" ? "bg-white" : "bg-transparent"}
                      rounded-l-2xl rounded-r-2xl  w-11 flex items-center justify-center border cursor-pointer`}
                onClick={() => {
                  slideNext_desktop();
                  setSwipe("right");
                }}
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="mdi:chevron-right">
                    <path
                      id="Vector"
                      d="M8.59009 16.6862L13.1701 12.1062L8.59009 7.5162L10.0001 6.1062L16.0001 12.1062L10.0001 18.1062L8.59009 16.6862Z"
                      fill="#313131"
                      style={{
                        fill: `${swipe === "right" ? "black" : "white"}`,
                        fillOpacity: 1,
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {!isOpenModal && (
            <>
              <div className="w-11/12 mx-auto mt-2">
                <Swiper
                  spaceBetween={60}
                  loop={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 2,
                    },
                    700: {
                      slidesPerView: 3,
                    },
                    900: {
                      slidesPerView: 4,
                    },
                    1100: {
                      slidesPerView: 5,
                    },
                  }}
                  allowTouchMove={false}
                  ref={swiperRef_desktop}
                >
                  {perfumes.map((element, index) => (
                    <SwiperSlide>
                      <PerfumeCard perfume={element} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}

          <div className="w-full flex flex-row justify-center mt-7 text-black">
            <Link to={"/products"}>
              <div className=" bg-white flex flex-row items-center px-5 py-2 cursor-pointer">
                <span>View more</span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="mdi:chevron-right">
                    <path
                      id="Vector"
                      d="M8.59009 16.6862L13.1701 12.1062L8.59009 7.5162L10.0001 6.1062L16.0001 12.1062L10.0001 18.1062L8.59009 16.6862Z"
                      fill="#313131"
                      style={{ fill: "black", fillOpacity: 1 }}
                    />
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Part */}
        <div className="lg:hidden  flex flex-col gap-10 mt-10">
          <div className="w-11/12 mx-auto mt-5 justify-between items-center flex flex-row ">
            <h1 className="text-4xl text-white richmond_display text-center w-full">
              Our Midrange perfumes
            </h1>
          </div>

          {/*  SECTION 2 */}

          {!isOpenModal && (
            <>
              <div className="w-11/12 mx-auto mt-2 ">
                <Swiper
                  spaceBetween={60}
                  loop={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 2,
                    },
                    700: {
                      slidesPerView: 3,
                    },
                    900: {
                      slidesPerView: 4,
                    },
                    1100: {
                      slidesPerView: 5,
                    },
                  }}
                  allowTouchMove={false}
                  ref={swiperRef_mobile}
                >
                  {perfumes.map((element, index) => (
                    <SwiperSlide>
                      <PerfumeCard perfume={element} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex flex-row gap-2 w-full justify-center ">
                <div
                  className={`
                      ${swipe === "left" ? "bg-white" : "bg-transparent"}
                      rounded-l-2xl rounded-r-2xl  w-11 flex items-center justify-center border cursor-pointer`}
                  onClick={() => {
                    slidePrev_mobile();
                    setSwipe("left");
                  }}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="mdi:chevron-left">
                      <path
                        id="Vector"
                        d="M16.3766 16.6862L11.7966 12.1062L16.3766 7.5162L14.9666 6.1062L8.96655 12.1062L14.9666 18.1062L16.3766 16.6862Z"
                        fill="white"
                        style={{
                          fill: `${swipe === "left" ? "black" : "white"}`,
                          fillOpacity: 1,
                        }}
                      />
                    </g>
                  </svg>
                </div>

                <div
                  className={`
                      ${swipe === "right" ? "bg-white" : "bg-transparent"}
                      rounded-l-2xl rounded-r-2xl  w-11 flex items-center justify-center border cursor-pointer`}
                  onClick={() => {
                    slideNext_mobile();
                    setSwipe("right");
                  }}
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="mdi:chevron-right">
                      <path
                        id="Vector"
                        d="M8.59009 16.6862L13.1701 12.1062L8.59009 7.5162L10.0001 6.1062L16.0001 12.1062L10.0001 18.1062L8.59009 16.6862Z"
                        fill="#313131"
                        style={{
                          fill: `${swipe === "right" ? "black" : "white"}`,
                          fillOpacity: 1,
                        }}
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>

        {/* SECTION 3 */}
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row  text-white pt-32 ">
          {/* Section A */}
          <div className="border-y-2 flex-1 flex items-center py-7 lg:py-5">
            <h1 className="text-5xl lg:text-3xl richmond_display">
              Elevate your senses with Elysian Elegance
            </h1>
          </div>

          {/* Section B */}
          <div className="flex-1 flex items-center">
            <img src={Line} alt="" className="w-full hidden lg:block" />
          </div>

          {/* Section C */}
          <div className="flex flex-col gap-3 flex-1 border-b-2 lg:border-y-2 items-start justify-center py-7 lg:py-5">
            <h1 className="helvetica text-4xl lg:text-base font-thin">
              Welcome to the epitome of Perfume -- the best luxury perfumes
            </h1>

            {/* Learn More Button */}
            <div className="flex flex-row items-center  bg-white cursor-pointer">
              <Link to={"/products"}>
                <div className="px-5 py-1  text-black">Learn more</div>
              </Link>

              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:chevron-right">
                  <path
                    id="Vector"
                    d="M8.59009 16.6862L13.1701 12.1062L8.59009 7.5162L10.0001 6.1062L16.0001 12.1062L10.0001 18.1062L8.59009 16.6862Z"
                    fill="#313131"
                    style={{ fill: "black", fillOpacity: 1 }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        {/* Desktop Screen */}
        <div className="hidden w-4/5 mx-auto lg:flex flex-row gap-2 mt-20">
          <div className="flex-1 flex flex-col gap-6 text-white">
            <h1 className="richmond_display text-4xl">How it works?</h1>
            <p className="helvetica text-sm opacity-80">
              Every month, you'll receive a thoughtfully curated selection of
              our average perfumes, designed to perfectly suit your daily needs.
              <br />
              <br />
              These fragrances have been carefully chosen to offer a delightful
              blend of scents, ideal for everyday wear. Each perfume in the
              collection has been crafted to ensure you always smell fresh and
              inviting, no matter the occasion. Our aim is to provide you with a
              variety of appealing options that enhance your daily routine,
              making it easy to find the perfect scent to match your mood and
              activities.
              <br />
              <br />
              With our monthly selections, you'll never have to worry about
              running out of your favorite fragrances, as you'll always have a
              new and exciting scent to enjoy.
            </p>
            <div
              onClick={() => scrollToTargetDiv()}
              className="border w-1/2 px-4 py-2 text-center cursor-pointer"
            >
              <span className="opacity-80">Start your subscription</span>
            </div>
          </div>

          <div className="flex-1">
            <img src={Group_1} alt="" />
          </div>
        </div>

        {/* SECTION 4 */}
        {/* MOBILE Screen */}
        <div className="flex w-11/12 mx-auto lg:hidden flex-col gap-5 mt-20 text-white">
          <h1 className="richmond_display text-6xl">How it works?</h1>

          <div className="flex-1">
            <img src={Group_1} alt="" />
          </div>

          <p className="helvetica text-sm opacity-80">
            Every month, you'll receive a thoughtfully curated selection of our
            average perfumes, designed to perfectly suit your daily needs.
            <br />
            <br />
            These fragrances have been carefully chosen to offer a delightful
            blend of scents, ideal for everyday wear. Each perfume in the
            collection has been crafted to ensure you always smell fresh and
            inviting, no matter the occasion. Our aim is to provide you with a
            variety of appealing options that enhance your daily routine, making
            it easy to find the perfect scent to match your mood and activities.
            <br />
            <br />
            With our monthly selections, you'll never have to worry about
            running out of your favorite fragrances, as you'll always have a new
            and exciting scent to enjoy.
          </p>

          <div
            className="border w-11/12 md:w-1/2 px-4 py-2 text-center cursor-pointer"
            onClick={() => scrollToTargetDiv()}
          >
            <span className="opacity-80 helvetica">
              Start your subscription
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
