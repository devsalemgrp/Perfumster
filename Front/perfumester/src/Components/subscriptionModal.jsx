import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ChoosePerfumeModal from "./Modals/ChoosePerfumeModal";
import StripeModal from "./Modals/StripeModal";

const SubscriptionModal = ({ isOpenModal, closeModal, subscription }) => {
  const customStyles = {
    content: {
      backgroundColor: "#1D1D1D",
    },
  };

  const [subscriptionDetail, setSubscriptionDetail] = useState({
    subscription: subscription,
    address: {
      country: "",
      address: "",
      apartment: "",
      city: "",
      postalCode: "",
    },
    perfumes: [],
  });

  const handleAddressChange = (e) => {
    setSubscriptionDetail({
      ...subscriptionDetail,
      address: {
        ...subscriptionDetail.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);

  const openStripeModal = () => {
    setIsStripeModalOpen(true);
  };
  const closeStripeModal = () => {
    setIsStripeModalOpen(false);
  };

  const [isOpenChoosePerfumeModal, setIsOpenChoosePerfumeModal] =
    useState(false);

  const openChoosePerfumeModal = () => {
    setIsOpenChoosePerfumeModal(true);
  };

  const closeChoosePerfumeModal = () => {
    setIsOpenChoosePerfumeModal(false);
  };

  useEffect(() => {
    console.log({ SUBSCRIPTION: subscriptionDetail });
  }, [subscriptionDetail]);
  return (
    <>
      <ChoosePerfumeModal
        isOpenModal={isOpenChoosePerfumeModal}
        closeModal={closeChoosePerfumeModal}
        subscription={subscription}
        setSubscriptionDetail={setSubscriptionDetail}
      />

      <StripeModal
        isOpenModal={isStripeModalOpen}
        closeModal={closeStripeModal}
      ></StripeModal>

      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => {
          setSubscriptionDetail({
            subscription: null,
            address: {
              country: "",
              address: "",
              apartment: "",
              city: "",
              postalCode: "",
            },
            perfumes: [],
          });
          closeModal();
        }}
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
                className="flex flex-col gap-2 w-full mt-2"
              >
                <select
                  name="country"
                  value={subscriptionDetail.address.country}
                  onChange={handleAddressChange}
                  className="bg-transparent text-white"
                >
                  <option value="">Select Country</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={subscriptionDetail.address.address}
                  onChange={handleAddressChange}
                />
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={subscriptionDetail.address.apartment}
                  onChange={handleAddressChange}
                />
                <div className="flex flex-col lg:flex-row gap-2">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={subscriptionDetail.address.city}
                    onChange={handleAddressChange}
                    className="flex-1"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={subscriptionDetail.address.postalCode}
                    onChange={handleAddressChange}
                    className="flex-1"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row gap-10 items-end justify-end mt-3 helvetica">
            <div
              className="bg-[#D9D9D9] px-6 py-2 cursor-pointer"
              onClick={openChoosePerfumeModal}
            >
              <span>Choose Perfume</span>
            </div>
            <div
              className="bg-[#D9D9D9] px-6 py-2 cursor-pointer"
              onClick={openStripeModal}
            >
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SubscriptionModal;
