import React, { useEffect, useState } from "react";
import "./style.css";
import Perfume8 from "../../Assets/Test_perfumes/perfume8.png";
import Footer1 from "../../Components/Footer1/footer1";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/ProductsActions";
//The cart will be implemented using Redux , where the quantity and the perfumes are going to be saved ]
// in an array
//check if how can we save the image of the perfume in the cart
//The array will contain , perfume , quantity and the total cost

const MyCart = () => {
  const [perfumes, setPerfumes] = useState([]);

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (store) => store.productsReducer
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setPerfumes(products);
  }, [products]);

  const handleIncreaseQuantity = (index) => {
    // Implentation
  };

  const handleDecreaseQuantity = (index) => {
    // Implentation
  };

  const handleDelete = (index) => {
    //Implementation
  };

  return (
    <>
      <div className="w-full bg-[#313131] text-white helvetica py-20">
        <div className="w-4/5 mx-auto">
          <h1 className="mb-10 text-5xl richmond_display">My Cart</h1>

          <div className="md:flex flex-row hidden ">
            <h1 className="flex-1">Product</h1>
            <h1 className="flex-1 text-center">Quantity</h1>
            <h1 className="flex-1 text-end pr-10">Pricing</h1>
          </div>

          <div className="flex flex-col gap-4 pt-5">
            {perfumes.slice(0, 5).map((element, index) => (
              <>
                <div className="flex md:flex-row flex-col gap-y-5  ">
                  <div className="flex-1 flex flex-row gap-2 items-center">
                    <div className="border">
                      <img src={element.image} alt="" width={60} />
                    </div>
                    <span>{element.name}</span>
                  </div>

                  <div className="flex-1 flex md:justify-center items-center flex-row gap-4">
                    QTY:
                    <div className="flex flex-row gap-2 p-1 px-2 w-28 border justify-between">
                      <span
                        onClick={handleDecreaseQuantity()}
                        className="cursor-pointer"
                      >
                        -
                      </span>
                      <span>{element.quantity}</span>
                      <span
                        onClick={handleIncreaseQuantity()}
                        className="cursor-pointer"
                      >
                        +
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-row items-center md:justify-end gap-3">
                    <span>${element.price}</span>
                    <div
                      className="border p-1 cursor-pointer"
                      onClick={handleDelete(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M7.5835 22.75C6.98766 22.75 6.47777 22.538 6.05383 22.1141C5.62988 21.6901 5.41755 21.1799 5.41683 20.5833V6.5H4.3335V4.33333H9.75016V3.25H16.2502V4.33333H21.6668V6.5H20.5835V20.5833C20.5835 21.1792 20.3715 21.6894 19.9476 22.1141C19.5236 22.5388 19.0134 22.7507 18.4168 22.75H7.5835ZM18.4168 6.5H7.5835V20.5833H18.4168V6.5ZM9.75016 18.4167H11.9168V8.66667H9.75016V18.4167ZM14.0835 18.4167H16.2502V8.66667H14.0835V18.4167Z"
                          fill="white"
                          style={{ fill: "white", fillOpacity: 1 }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>

        <div className="w-4/5 mx-auto flex flex-col justify-end items-end mt-2 gap-3">
          <h1>Total</h1>
          <div className="flex md:flex-row flex-col gap-2 items-end">
            <span>Tax included. Shipping calculated at checkout </span>
            <span className="text-3xl">
              ${perfumes.reduce((sum, item) => sum + item.price, 0)}
            </span>
          </div>

          <Link to={"/checkout"}>
            <div className="p-1 px-5 border cursor-pointer">
              <span>Checkout</span>
            </div>
          </Link>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default MyCart;
