import React, { useEffect, useState } from "react";
import PerfumeCard from "../../Components/perfumeCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/ProductsActions";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../Redux/Cart/CartActions";

const localHost = "http://localhost:3001/";
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const { perfume } = location.state;

  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productsReducer);
  const [perfumes, setPerfumes] = useState([]);
  const { cart } = useSelector((store) => store.cartReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(perfume, quantity));
  };

  useEffect(() => {
    if (products.data && products.data.length > 0) {
      const filteredProducts = products.data.filter(
        (product) => product.category === perfume.category
      );
      const randomPerfumes = shuffleArray(filteredProducts).slice(0, 4);
      setPerfumes(randomPerfumes);
    }
  }, [products]);

  return (
    <div className="w-full bg-[#313131] py-10 helvetica">
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-3">
        {/* FIRST COLUMN */}
        <div className="flex-1 border p-4 flex justify-center ">
          <img src={localHost + perfume?.image} alt="" width={300} />
        </div>

        {/* SECOND COLUMN */}
        <div className="flex-1 flex flex-col gap-2 text-white">
          <h1>Perfumster Fragrance</h1>
          <h1 className="richmond_display text-2xl">{perfume.name}</h1>
          <h1 className="text-4xl">${perfume.price}</h1>
          <p className="text-sm">
            Are you looking for the most exclusive perfume with ingredients
            source from wide range . Then Tom Ford is your fragrance with top
            notes of bergamot essence & green leaves, heart notes of amber melon
            and pineapple and base notes of woody, vanilla and must is the one
            for you
          </p>

          <div className="">
            <h1 className="font-bold">Top Notes :</h1>
            <h1 className="opacity-60">Test Test Test</h1>
          </div>

          <div className="">
            <h1 className="font-bold">Top Notes :</h1>
            <h1 className="opacity-60">Test Test Test</h1>
          </div>

          <div className="">
            <h1 className="font-bold">Top Notes :</h1>
            <h1 className="opacity-60">Test Test Test</h1>
          </div>

          <hr />

          <h1>
            Size : <span className="opacity-60">3.4OZ/6ML</span>{" "}
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <span>QTY:</span>
            <div className="flex flex-row gap-2 p-1 px-2 w-28 border justify-between">
              <span
                onClick={() => {
                  setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
                }}
              >
                -
              </span>
              <span>{quantity}</span>
              <span
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                +
              </span>
            </div>
            <div
              className="bg-[#B99545] text-center text-white w-full p-2"
              onClick={handleAddToCart}
            >
              Add To Cart
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {perfumes.slice(0, 4).map((element, index) => (
          <PerfumeCard perfume={element} />
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
