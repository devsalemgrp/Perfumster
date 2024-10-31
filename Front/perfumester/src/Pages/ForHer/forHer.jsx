import React, { useEffect, useState } from "react";
import Recommended from "../../Assets/Women/recomended.png";

import PerfumeCard from "../../Components/perfumeCard";
import SpecialCard from "../../Components/specialsCard";
import "./style.css";
import Footer_1 from "../../Components/Footer1/footer1";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/ProductsActions";
import { getWomenData } from "../../Redux/ForHer/ForHerActions";

const localHost = "http://localhost:3001/";
const ForHer = () => {
  const [chosen, setChosen] = useState("60ml");

  const [perfumes, setPerfumes] = useState([]);
  const [homeSection, setHomeSection] = useState([]);
  const [recommendedSection, setRecommendedSection] = useState([]);
  const [specialBackgroundsSection, setSpecialBackgroundsSection] = useState(
    []
  );
  const [specialPerfumesSection, setSpecialPerfumesSection] = useState([]);

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsReducer);
  const { womenData } = useSelector((store) => store.forHerReducer);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getWomenData());
  }, [dispatch]);

  useEffect(() => {
    if (products.data) {
      setPerfumes(
        products.data.filter((perfume) => perfume.category === "Female")
      );
    }
    if (womenData.data) {
      setHomeSection(womenData.data.filter((data) => data.section === "home"));
      setRecommendedSection(
        womenData.data.filter((data) => data.section === "recommended")
      );
      setSpecialBackgroundsSection(
        womenData.data.filter((data) => data.section === "special_backgrounds")
      );
      setSpecialPerfumesSection(
        womenData.data.filter((data) => data.section === "special_perfumes")
      );
    }
  }, [products, womenData]);

  return (
    <>
      <div className="w-full bg-[#313131] pb-10">
        {/* Heading Image with Text */}
        <div className="w-full relative">
          {/* Text */}
          <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
            <div className="w-full h-full  px-2 lg:px-0 lg:w-4/5 mx-auto pt-5 flex flex-col justify-start md:justify-center gap-2">
              <h1 className="text-white text-sm font-thin">Women Colognes</h1>
              <h2 className="text-white text-4xl md:text-6xl font-thin w-full lg:w-2/3 richmond">
                Discover the Essence <br /> of Femininity
              </h2>
              <p className="w-1/3 hidden md:block text-white font-thin opacity-80 text-sm">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar. Fermentum scelerisque sit consectetur hac
                mi. Mollis leo eleifend ultricies purus iaculis.
              </p>
              <div className="flex flex-row gap-2 mt-5">
                <Link to={"/products"}>
                  <div className="bg-white text-black p-2 px-3 md:p-3 md:px-6 font-thin text-sm cursor-pointer">
                    Explore our collection
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <img
              src={localHost + homeSection[0]?.content}
              className="w-full h-screen object-cover object-right"
              alt=""
            />
          </div>
        </div>

        {/* Highly Recommended Image + Title */}
        <div className="py-9">
          <div className="w-full text-center">
            <h1 className="highly_recommended text-xl md:text-3xl">
              Highly recommended
            </h1>
          </div>

          <div className="w-4/5 mx-auto mt-10 relative">
            <img src={Recommended} alt="" className="w-full h-full" />

            <div class="perfume-position_women absolute">
              <img
                src={localHost + recommendedSection[0]?.content}
                alt="Perfume"
                class="perfume_women"
              />
            </div>

            <div class="perfume-position_women_2 absolute">
              <img
                src={localHost + recommendedSection[0]?.content}
                alt="Perfume"
                class="perfume_women_2"
              />
            </div>
          </div>
        </div>

        {/* Specials */}
        <div className="py-9">
          <div className="w-full text-center mt-10">
            <h1 className="richmond_display text-white text-xl md:text-5xl">
              Specials
            </h1>
          </div>

          <div className="w-4/5 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {specialPerfumesSection.map((element, index) => (
              <div key={index} className="w-full">
                <SpecialCard
                  perfume={element}
                  backgroundImage={specialBackgroundsSection[index]?.content}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product List */}
        <div className="py-9">
          <div className="w-full text-center text-white">
            <h1 className=" text-xl md:text-3xl">Product List</h1>
          </div>

          <div className="w-2/3 md:1/2 lg:w-1/3 bg-[#454545] flex flex-row items-center justify-center m-auto mt-10 text-center">
            <div
              className={`${
                chosen === "60ml" ? "text-black bg-white" : "text-slate-200"
              } flex-1 p-3 px-5 md:py-4 md:px-10 cursor-pointer`}
              onClick={() => setChosen("60ml")}
            >
              <span>60ml</span>
            </div>
            <div
              className={`${
                chosen === "100ml" ? "text-black bg-white" : "text-slate-200 "
              } flex-1  p-3 px-5 md:py-4 md:px-10 cursor-pointer`}
              onClick={() => setChosen("100ml")}
            >
              <span>100ml</span>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto py-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-10">
            {perfumes.map((element, index) => (
              <PerfumeCard perfume={element} />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-center mt-10">
          <Link to={"/products"}>
            <div className="p-2 bg-white text-black cursor-pointer">
              Explore our collection
            </div>
          </Link>
        </div>
      </div>
      <Footer_1 />
    </>
  );
};

export default ForHer;
