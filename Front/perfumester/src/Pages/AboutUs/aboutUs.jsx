import React from "react";
import "./style.css";
import Heading from "../../Assets/AboutUs/heading.png";
import Heading2 from "../../Assets/AboutUs/heading2.png";
import SwipingElements from "./SwipingElements";

const AboutUs = () => {
  console.log("About Us");
  return (
    <div className="w-full bg-[#313131] pt-10">
      <div className="w-full">
        <div className="w-full ">
          <h1 className=" aboutus_title opacity-5 text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            PERFUMESTER
          </h1>
        </div>

        {/* Section 1 */}
        <div className=" w-full">
          <div className="w-4/5 mx-auto flex flex-col-reverse lg:flex-row gap-10 justify-between items-center">
            <div className="flex flex-1 flex-col gap-2 text-white  justify-center">
              <h1 className="aboutus_introduction text-4xl">Introduction</h1>
              <p className="aboutus_text text-sm opacity-80">
                Welcome to Perfumster.com, your premier destination for designer
                fragrances at unbeatable prices. At Perfumster Inc., we are
                passionate about bringing you the best in luxury scents without
                the premium price tag. Our mission is to provide fragrance
                enthusiasts with authentic, high-quality perfumes and colognes,
                meticulously rebottled and repackaged to ensure every spritz is
                as enchanting as the original.
              </p>
            </div>
            <img src={Heading} alt="" width={300} className="flex-1" />
          </div>
        </div>

        {/* Section 2  */}
        <div className="w-full pb-20">
          <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-2 items-center lg:items-end relative p-2 pb-12">
            {/* Background div at the bottom */}
            <div className="absolute inset-1/4 bottom-0 left-0 w-full aboutus_background "></div>

            {/* Content next to the image */}
            <div className="flex-1">
              <img src={Heading2} alt="" width={600} />
            </div>

            <div className="flex-1 pb-10 xl:pb-32">
              <div className="w-full flex flex-col items-start p-2 gap-4 ">
                <h1 className="aboutus_title text-2xl">Who are we:</h1>
                <p className="aboutus_paragraph text-lg">
                  Perfumster.com is owned by Perfumster Inc., a wholly
                  independent and separate entity from the manufacturers or
                  brand owners of the designer fragrances it sells. The perfumes
                  and colognes offered by Perfumster are genuine products that
                  have been independently rebottled and repackaged by
                  Perfumster. Perfumster is not affiliated with the designers or
                  manufacturers of these fragrances and has no agreements,
                  licenses, or arrangements with them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full relative">
          <div className="absolute top-0 left-0 inset-0 bg-[#D9D9D9] w-full z-10 opacity-10"></div>
          <div className="w-4/5 mx-auto py-20 text-white">
            <div className="w-full lg:w-3/5 flex flex-col gap-3">
              <h1 className="richmond_display text-2xl">Customer Commitment</h1>
              <p className="helvetica text-sm opacity-80">
                Our customers are at the heart of everything we do. We strive to
                provide exceptional service and satisfaction with every order.
                As a special thank you, every purchase includes a complimentary
                small demonizer, perfect for taking your favorite scent on the
                go. We are dedicated to making your shopping experience
                delightful and rewarding.
              </p>
            </div>
          </div>
        </div>

        <SwipingElements></SwipingElements>
      </div>
    </div>
  );
};

export default AboutUs;
