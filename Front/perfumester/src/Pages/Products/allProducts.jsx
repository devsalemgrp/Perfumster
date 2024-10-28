import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

import PerfumeCard from "../../Components/perfumeCard";
import { getProducts } from "../../Redux/Products/ProductsActions";

const AllProducts = () => {
  const [filterSelected, setFilterSelected] = useState(false);
  const [perfumes, setPerfumes] = useState([]);

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (store) => store.productsReducer
  );

  const [searchFilter, setSearchFilter] = useState("");
  const [sizeSelected, setSizeSelected] = useState("5ml");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedGender, setSelectedGender] = useState("Male");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.data) {
      setPerfumes(products.data);
    }
  }, [products]);

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setSelectedGender(value);
  };

  useEffect(() => {
    const filteredPerfumes = products?.data?.filter((perfume) => {
      return (
        perfume.perfume_size === sizeSelected &&
        perfume.price <= (selectedPrice === 0 ? 500 : Number(selectedPrice)) &&
        perfume.name.toLowerCase().includes(searchFilter.toLowerCase()) &&
        perfume.category === selectedGender
      );
    });
    setPerfumes(filteredPerfumes);
  }, [sizeSelected, searchFilter, selectedPrice, selectedGender, products]);

  return (
    <div className="relative">
      {filterSelected && (
        <div className="absolute top-0 left-0 w-full h-auto bg-[rgb(2,2,2)] z-50 text-white">
          <div className="w-11/12 mx-auto py-10">
            <div className="slider-container w-3/4 pb-10 ">
              <div className="price-display text-lg mb-4">
                Price: $
                <span id="price-value" className="font-semibold">
                  {selectedPrice}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500">$0</span>
                <span className="text-gray-500">$500</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={selectedPrice}
                id="price-slider"
                className="w-full h-2 rounded-lg bg-white appearance-none cursor-pointer slider-range"
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
            </div>

            <div className="w-3/4 flex flex-col gap-2 text-md">
              <h1 className="richmond_display text-2xl">Size :</h1>
              <div className="flex flex-row gap-2">
                <div
                  className={`flex-1 border p-2 px-4 text-center ${
                    sizeSelected === "5ml"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  } cursor-pointer`}
                  onClick={() => setSizeSelected("5ml")}
                >
                  <span className="helvetica">5 ml</span>
                </div>

                <div
                  className={`flex-1 border p-2 px-4 text-center ${
                    sizeSelected === "10ml"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  } cursor-pointer`}
                  onClick={() => setSizeSelected("10ml")}
                >
                  <span className="helvetica">10 ml</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 py-5">
              <h1 className="richmond_display text-2xl">Choose type :</h1>
              <form action="" className="flex flex-col gap-2 items-start">
                <label className="helvetica">
                  <input
                    type="checkbox"
                    value="Male"
                    onChange={handleCheckboxChange}
                    checked={selectedGender === "Male"}
                  />
                  Male
                </label>
                <label className="helvetica">
                  <input
                    type="checkbox"
                    value="Female"
                    onChange={handleCheckboxChange}
                    checked={selectedGender === "Female"}
                  />
                  Female
                </label>
              </form>
            </div>

            <div
              className="bg-white text-black p-2 px-5 text-center"
              onClick={() => setFilterSelected(false)}
            >
              FILTER
            </div>
          </div>
        </div>
      )}

      <div className="bg-[rgb(49,49,49)] py-10">
        {/* Search */}
        <div className="w-11/12 mx-auto mt-5">
          <div className="bg-[#454545] p-3 lg:p-11">
            <form id="search" className="w-full flex flex-col gap-3">
              <label className="text-white text-2xl helvetica">Search</label>
              <div className="flex flex-row gap-2 items-center bg-[#d9d9d9] px-3 ">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="mdi:magnify">
                    <path
                      id="Vector"
                      d="M9.5 3.33203C11.2239 3.33203 12.8772 4.01685 14.0962 5.23584C15.3152 6.45482 16 8.10812 16 9.83203C16 11.442 15.41 12.922 14.44 14.062L14.71 14.332H15.5L20.5 19.332L19 20.832L14 15.832V15.042L13.73 14.772C12.5504 15.7785 11.0506 16.3316 9.5 16.332C7.77609 16.332 6.12279 15.6472 4.90381 14.4282C3.68482 13.2092 3 11.5559 3 9.83203C3 8.10812 3.68482 6.45482 4.90381 5.23584C6.12279 4.01685 7.77609 3.33203 9.5 3.33203ZM9.5 5.33203C7 5.33203 5 7.33203 5 9.83203C5 12.332 7 14.332 9.5 14.332C12 14.332 14 12.332 14 9.83203C14 7.33203 12 5.33203 9.5 5.33203Z"
                      fill="black"
                      style={{ fill: "black", fillOpacity: 1 }}
                    />
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full p-1 bg-[#d9d9d9]"
                  onChange={(e) => setSearchFilter(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="w-11/12 mx-auto flex flex-col lg:flex-row mt-10 text-white">
          {/* DESKTOP FILTER PART */}
          <div className="w-1/4 hidden lg:block">
            <div className="slider-container w-3/4 pb-10 ">
              <div className="price-display text-lg mb-4">
                Price: $
                <span id="price-value" className="font-semibold">
                  {selectedPrice}
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500">$0</span>
                <span className="text-gray-500">$500</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={selectedPrice}
                id="price-slider"
                className="w-full h-2 rounded-lg bg-white appearance-none cursor-pointer slider-range"
                onChange={(e) => setSelectedPrice(e.target.value)}
              />
            </div>

            <div className="w-3/4 flex flex-col gap-2 text-md">
              <h1 className="richmond_display text-2xl">Size :</h1>
              <div className="flex flex-row gap-2">
                <div
                  className={`flex-1 border p-2 px-4 text-center ${
                    sizeSelected === "5ml"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  } cursor-pointer`}
                  onClick={() => setSizeSelected("5ml")}
                >
                  <span className="helvetica">5 ml</span>
                </div>

                <div
                  className={`flex-1 border p-2 px-4 text-center ${
                    sizeSelected === "10ml"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  } cursor-pointer`}
                  onClick={() => setSizeSelected("10ml")}
                >
                  <span className="helvetica">10 ml</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 py-5">
              <h1 className="richmond_display text-2xl">Choose type :</h1>
              <form action="" className="flex flex-col gap-2 items-start">
                <label className="helvetica">
                  <input
                    type="checkbox"
                    value="Male"
                    onChange={handleCheckboxChange}
                    checked={selectedGender === "Male"}
                  />
                  Male
                </label>
                <label className="helvetica">
                  <input
                    type="checkbox"
                    value="Female"
                    onChange={handleCheckboxChange}
                    checked={selectedGender === "Female"}
                  />
                  Female
                </label>
              </form>
            </div>
          </div>

          {/* MOBILE FILTER PART */}
          <div className="block lg:hidden pb-2">
            <div
              className="w-1/3 sm:w-2/5 md:1/4 border text-center p-1 richmond_display flex flex-row items-center justify-center gap-2"
              onClick={() => setFilterSelected(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M3.02187 4.17553C3.02242 4.01936 3.08498 3.86979 3.1958 3.75975C3.30662 3.6497 3.45661 3.58818 3.61279 3.58872L16.5677 3.63393C16.7239 3.63447 16.8735 3.69704 16.9835 3.80785C17.0936 3.91867 17.1551 4.06867 17.1546 4.22484C17.154 4.38102 17.0914 4.53058 16.9806 4.64063C16.8698 4.75068 16.7198 4.8122 16.5636 4.81165L3.60868 4.76645C3.4525 4.7659 3.30294 4.70334 3.19289 4.59252C3.08284 4.4817 3.02133 4.33171 3.02187 4.17553ZM5.36088 8.89465C5.36143 8.73847 5.42399 8.58891 5.53481 8.47886C5.64563 8.36881 5.79562 8.30729 5.9518 8.30784L14.1959 8.3366C14.352 8.33715 14.5016 8.39971 14.6117 8.51053C14.7217 8.62135 14.7832 8.77135 14.7827 8.92752C14.7821 9.0837 14.7196 9.23326 14.6087 9.34331C14.4979 9.45335 14.3479 9.51487 14.1918 9.51433L5.94769 9.48556C5.79151 9.48502 5.64195 9.42245 5.5319 9.31164C5.42185 9.20082 5.36034 9.05082 5.36088 8.89465ZM7.69989 13.6138C7.70044 13.4576 7.763 13.308 7.87382 13.198C7.98464 13.0879 8.13463 13.0264 8.29081 13.027L11.824 13.0393C11.9802 13.0398 12.1297 13.1024 12.2398 13.2132C12.3498 13.324 12.4113 13.474 12.4108 13.6302C12.4102 13.7864 12.3477 13.9359 12.2369 14.046C12.126 14.156 11.976 14.2175 11.8199 14.217L8.2867 14.2047C8.13052 14.2041 7.98096 14.1416 7.87091 14.0308C7.76086 13.9199 7.69935 13.7699 7.69989 13.6138Z"
                  fill="white"
                  style={{ fill: "white", fillOpacity: 1 }}
                />
              </svg>
              <span>FILTER</span>
            </div>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-3">
            {perfumes &&
              perfumes.map((element, index) => (
                <PerfumeCard perfume={element} key={index} />
              ))}

            {loading && <div>Loading...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
