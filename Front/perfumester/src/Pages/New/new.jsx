import React, { useEffect, useState } from "react";
import "./style.css";
import Image_Heading from "../../Assets/New/Image_Heading.png";
import PerfumeCard from "../../Components/perfumeCard";
import Footer1 from "../../Components/Footer1/footer1";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/ProductsActions";
import { getNewData } from "../../Redux/New/NewActions";
const localHost = "http://localhost:3001/";
const New = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [newData, setNewData] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsReducer);
  const { new_data } = useSelector((store) => store.newReducer);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getNewData());
  }, [dispatch]);

  useEffect(() => {
    if (products.data) {
      setPerfumes(products.data);
    }
    if (new_data.data) {
      setNewData(new_data.data);
    }
  }, [products, new_data]);

  useEffect(() => {
    console.log({ newData: newData, perfumes: perfumes });
  }, [perfumes, newData]);
  return (
    <>
      <div className="w-full bg-[#313131] py-10">
        <div className="w-4/5 m-auto  pb-6">
          <h1 className="new_page_heading text-2xl md:text-5xl ">
            Our New Fragrance Samples
          </h1>
        </div>

        <div className="w-full ">
          <img
            src={localHost + newData[0]?.content}
            className="w-full object-center"
            alt="Image_Heading"
          />
        </div>

        <div className="w-4/5 mx-auto mt-10 pb-5">
          <h2 className="new_explore_heading text-2xl">
            Explore the new perfumes we recently added
          </h2>
        </div>

        <div className="w-11/12 mx-auto mt-10">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-10">
            {perfumes.map((element, index) => (
              <PerfumeCard perfume={element} />
            ))}
          </div>
        </div>

        <Link to={"/products"}>
          <div className="w-full flex flex-row items-center justify-center mt-10">
            <div className="p-2 bg-white text-black cursor-pointer">
              Explore our collection
            </div>
          </div>
        </Link>
      </div>

      <Footer1 />
    </>
  );
};

export default New;
