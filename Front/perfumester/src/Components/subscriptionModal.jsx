import React from "react";
import Modal from "react-modal";

const SubscriptionModal = ({ isOpenModal, closeModal, subscription }) => {
  const customStyles = {
    content: {
      backgroundColor: "#1D1D1D",
    },
  };
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="w-11/12 mx-auto text-white">
        <h1 className="text-4xl richmond_display pb-10">Subscribe To :</h1>

        <div className="w-full border_2 p-3 helvetica">
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col items-start ">
              <h1>{subscription?.scents_number} Scent per month</h1>
              <h3 className="text-sm opacity-80">
                {subscription?.package_type} perfumes
              </h3>
            </div>
            <h1 className="opacity-80">${subscription?.price}</h1>
          </div>

          <hr className="w-full mt-4" />

          <div className="py-5 flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <h1>SubTotal:</h1>
              <h2>${subscription?.price}</h2>
            </div>

            <div className="flex flex-row justify-between">
              <h1>Shipping:</h1>
              <h2>Enter Shipping address</h2>
            </div>
            <div className="flex flex-row justify-between">
              <h1>Total</h1>
              <h2>${subscription?.price}</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 mt-10 helvetica">
          <div className="flex-1">
            <h1 className="text-3xl">Delivery Address</h1>

            <form
              id="deliveryAddress"
              action=""
              className="flex flex-col gap-2 w-full mt-2"
            >
              <select className="bg-transparent">
                <option value="" className="text-white">
                  Select Country
                </option>
                <option value="">option 1</option>
                <option value="">option 2</option>
                <option value="">option 3</option>
              </select>
              <input type="text" placeholder="Address" />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
              />

              <div className="flex flex-col lg:flex-row gap-2">
                <input type="text" placeholder="City" className="flex-1" />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="flex-1"
                />
              </div>
            </form>
          </div>

          <div className="flex-1 flex flex-col gap-2 ">
            <h1 className="text-3xl">Payment</h1>
            <h1 className="bg-[#D9D9D9] p-3">Credit Card</h1>

            <form
              id="payment"
              action=""
              className="flex flex-col gap-2 w-full "
            >
              <input type="text" placeholder="Credit card Number" />
              <input type="text" placeholder="Postal Code" className="flex-1" />
            </form>
          </div>
        </div>

        <div className="flex flex-row items-end justify-end mt-3 helvetica">
          <div className="bg-[#D9D9D9] px-6 py-2 cursor-pointer">
            <span>Checkout</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubscriptionModal;
