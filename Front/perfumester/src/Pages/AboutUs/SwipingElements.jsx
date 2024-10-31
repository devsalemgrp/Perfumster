import React from "react";

import Perfume1 from "../../Assets/Test_perfumes/perfume1.png";
import Perfume2 from "../../Assets/Test_perfumes/perfume2.png";
import Perfume3 from "../../Assets/Test_perfumes/perfume3.png";
import Perfume4 from "../../Assets/Test_perfumes/perfume4.png";
import Perfume5 from "../../Assets/Test_perfumes/perfume5.png";
import Perfume6 from "../../Assets/Test_perfumes/perfume6.png";
import Perfume7 from "../../Assets/Test_perfumes/perfume7.png";
import Perfume8 from "../../Assets/Test_perfumes/perfume8.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";

const SwipingElement = ({ perfume, color }) => {
  return (
    <div
      className={` h-44 w-20 md:h-52 md:w-24 lg:h-72 lg:w-36 rounded-t-full rounded-b-full  flex items-center justify-center`}
      style={{ backgroundColor: color }}
    >
      <img src={perfume} alt="" />
    </div>
  );
};

const SwipingElements = () => {
  const colors = ["#764040", "#7a6540", "#382626"];

  const perfumes = [
    {
      name: Perfume1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume4,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume5,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume6,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume7,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume8,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume1,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      name: Perfume3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  return (
    <>
      <div className="bg-[#424242] w-full pb-10 lg:block hidden">
        <Swiper
          spaceBetween={5}
          loop={true}
          breakpoints={{
            750: {
              slidesPerView: 6,
            },
            800: {
              slidesPerView: 7,
            },
          }}
          modules={[Autoplay]}
        >
          {perfumes.map((element, index) => (
            <SwiperSlide>
              <SwipingElement perfume={element.name} color={element.color} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-[#424242] w-full pb-10 lg:hidden flex flex-col gap-4">
        <div className="w-full">
          <Swiper
            spaceBetween={5}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 5,
              },
              700: {
                slidesPerView: 7,
              },
            }}
            modules={[Autoplay]}
          >
            {perfumes.map((element, index) => (
              <SwiperSlide>
                <SwipingElement perfume={element.name} color={element.color} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full">
          <Swiper
            spaceBetween={5}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 5,
              },
              700: {
                slidesPerView: 7,
              },
            }}
            modules={[Autoplay]}
          >
            {perfumes.map((element, index) => (
              <SwiperSlide>
                <SwipingElement perfume={element.name} color={element.color} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwipingElements;
