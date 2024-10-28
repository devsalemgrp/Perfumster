import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptions } from "../Redux/Subscriptions/SubscriptionsActions";

const PackageCard = ({ openModal, subscription, setSubscription }) => {
  const array = [
    {
      Scent: "1Scent",
      Price: "100",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.",
      detail2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.",
    },
    {
      Scent: "2Scent",
      Price: "200",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.",
      detail2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.",
    },
    {
      Scent: "3Scent",
      Price: "300",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.",
      detail2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeram, quid est.",
    },
  ];
  console.log(subscription);

  const dispatch = useDispatch();
  const { subscriptions } = useSelector((store) => store.subscriptionsReducer);
  const [_filterSubscriptions, setFilteredSubscriptions] = useState([]);
  const [packageChosen, setPackageChosen] = useState("MidRange");

  useEffect(() => {
    dispatch(getSubscriptions());
  }, [dispatch]);

  useEffect(() => {
    if (subscriptions.data) {
      setFilteredSubscriptions(
        subscriptions.data.filter((data) => data.package_type === packageChosen)
      );
    }
  }, [subscriptions, packageChosen]);

  return (
    <div className="flex flex-col gap-10">
      <div className="w-4/5 m-auto flex flex-col items-center justify-center gap-7 mt-10">
        {/* Title */}
        <div className="text-white text-center text-5xl richmond_display mx-auto">
          <span>
            Receive a package from our
            <br />
            monthly drops
          </span>
        </div>
      </div>

      {/* Choosing Package */}
      <div className="w-full sm:w-2/3 flex lg:flex-row package_chooser  justify-center text-white mx-auto mt-10 font-thin">
        <div
          className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${
            packageChosen === "Standard" ? "clicked" : ""
          } cursor-pointer`}
          onClick={() => {
            setPackageChosen("Standard");
          }}
        >
          <span className="text-sm sm:text-base">Standard</span>
        </div>
        <div
          className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${
            packageChosen === "MidRange" ? "clicked" : ""
          } cursor-pointer`}
          onClick={() => {
            setPackageChosen("MidRange");
          }}
        >
          <span>MidRange</span>
        </div>
        <div
          className={`flex-1 flex items-center justify-center p-2 sm:p-3  ${
            packageChosen === "HighEnd" ? "clicked" : ""
          } cursor-pointer`}
          onClick={() => {
            setPackageChosen("HighEnd");
          }}
        >
          <span>HighEnd</span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-stretch">
        {_filterSubscriptions.map((_package, index) => (
          <div className="flex flex-col gap-10 items-center justify-center card p-1 md:p-4 text-center py-10">
            <h1 className="scent text-3xl">{_package.scents_number} Scent</h1>
            <h2 className="price text-6xl glow">${_package.price}</h2>
            <p className="w-3/4 m-auto text-sm opacity-65">
              {_package.description}
            </p>
            <p className="w-3/4 m-auto text-sm opacity-65">
              {_package.description}
            </p>
            <div
              onClick={() => {
                setSubscription(_package);
                openModal();
              }}
              className="subscribe flex flex-row gap-2 py-2 px-3 items-center justify-center cursor-pointer"
            >
              <span className="text-sm">Subscribe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  d="M5.05664 10.2726L7.66459 7.66464L5.05664 5.05668L5.86346 4.25555L9.27255 7.66464L5.86346 11.0737L5.05664 10.2726Z"
                  fill="black"
                  style={{ fill: "black", fillOpacity: 1 }}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
