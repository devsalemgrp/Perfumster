import React from "react";
import { useNavigate } from "react-router-dom";

const localHost = "http://localhost:3001/";
const PerfumeCard = ({ perfume }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-stretch gap-3 h-full">
      <div className="bg-[#454545]">
        <div>
          {/* Image */}
          <div className="w-full flex justify-center h-56 p-4">
            <img src={localHost + perfume?.image} alt="" className="max-w-40" />
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col gap-2">
        <h1 className="product_name text-sm md:text-xl">{perfume?.name}</h1>

        <h3 className="product_price opacity-80 text-sm md:text-xl">
          ${perfume?.price}
        </h3>
      </div>

      {/* Buttons*/}
      <div className="flex flex-col sm:flex-row gap-3 font-thin justify-center ">
        <div
          className=" border text-white text-center p-1 px-5 cursor-pointer float-end"
          onClick={() => navigate("/addToCart", { state: { perfume } })}
        >
          <span className="text-sm">Add to cart</span>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCard;
