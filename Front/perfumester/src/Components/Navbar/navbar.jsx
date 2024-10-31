import React, { useEffect } from "react";
import { useState } from "react";
import MainMenu from "../../Assets/Navbar/main-menu.png";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../../Redux/Profile/ProfileActions";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const { profileData } = useSelector((store) => store.profileReducer);

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  return (
    <div className="w-full bg-black text-white py-2">
      {/* Menu DropDown */}

      {toggleMenu && (
        <div
          className="absolute w-full top-0 left-0 h-full z-40 bg-black flex items-center "
          onClick={() => setToggleMenu(false)}
        >
          <div
            className="w-2/4  pl-3 flex flex-col gap-4 h-full text-white py-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 flex flex-col justify-end gap-3">
              <h1>Select page:</h1>
              <Link to="/new" onClick={() => setToggleMenu(false)}>
                <h1 className="menu_item">New</h1>
              </Link>

              <Link to="/for-her" onClick={() => setToggleMenu(false)}>
                <h1 className="menu_item">For Her</h1>
              </Link>
              <Link to="/for-him" onClick={() => setToggleMenu(false)}>
                <h1 className="menu_item">For Him</h1>
              </Link>

              <Link to="/subscription" onClick={() => setToggleMenu(false)}>
                <h1 className="menu_item">Subscription</h1>
              </Link>
              <hr className="bg-white " />

              <Link to={"/products"} onClick={() => setToggleMenu(false)}>
                <h1 className="menu_item">Search</h1>
              </Link>
              <Link to="/my-cart" onClick={() => setToggleMenu(false)}>
                <h1 className="menu_item">Cart</h1>
              </Link>
              <hr className="bg-white " />
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="max-w-40 text-center bg-white rounded-full text-black p-2">
                <span className="">Sign in - Sign up</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="nav_group lg:py-5 lg:px-12 py-2 px-4  justify-between">
        <div className="flex flex-row gap-4 items-center ">
          <div className="flex lg:hidden" onClick={() => setToggleMenu(true)}>
            <img src={MainMenu} alt="menu" className="menu_icon " />
          </div>
          <div className="flex items-center justify-center text-xs">
            <NavLink to="/">
              <div className=" sm:flex flex-col text-center nav_logo cursor-pointer">
                <h1 className="sm:text-3xl">PERFUMSTER</h1>
                <h1 className=" sm:block">Decanted Perfumes</h1>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-6">
          {/* Navbar Group */}
          <div className="flex flex-row items-center justify-center gap-x-5">
            <ul className="hidden lg:flex flex-row justify-center items-center gap-10 text-xl text-white">
              <NavLink
                to="/new"
                className={({ isActive }) => (isActive ? "font-extrabold" : "")}
              >
                <li>New</li>
              </NavLink>

              <NavLink
                to="/for-him"
                className={({ isActive }) => (isActive ? "font-extrabold" : "")}
              >
                <li>For Him</li>
              </NavLink>

              <NavLink
                to="/for-her"
                className={({ isActive }) => (isActive ? "font-extrabold" : "")}
              >
                <li>For Her</li>
              </NavLink>

              <NavLink
                to="/subscription"
                className={({ isActive }) => (isActive ? "font-extrabold" : "")}
              >
                <li>Subscription</li>
              </NavLink>
            </ul>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <Link to={"/products"}>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <path
                    d="M18.1398 20.1942L11.9519 13.9184C11.4579 14.3453 10.8897 14.6757 10.2474 14.9096C9.60507 15.1434 8.95947 15.2603 8.31058 15.2603C6.72821 15.2603 5.38893 14.7048 4.29273 13.5937C3.19654 12.4826 2.64844 11.1246 2.64844 9.51978C2.64844 7.91493 3.19588 6.55629 4.29076 5.44385C5.38564 4.33142 6.72426 3.77453 8.30663 3.7732C9.889 3.77186 11.2289 4.32774 12.3265 5.44085C13.424 6.55395 13.9727 7.91259 13.9727 9.51677C13.9727 10.213 13.8512 10.8868 13.6081 11.5382C13.365 12.1896 13.0455 12.7468 12.6496 13.2099L18.8374 19.4846L18.1398 20.1942ZM8.31157 14.2572C9.62253 14.2572 10.7293 13.7995 11.6318 12.8841C12.5343 11.9688 12.9856 10.846 12.9856 9.51577C12.9856 8.18552 12.5343 7.06307 11.6318 6.1484C10.7293 5.23373 9.62253 4.77606 8.31157 4.77539C7.00061 4.77472 5.89355 5.23239 4.99037 6.1484C4.0872 7.0644 3.63594 8.18686 3.6366 9.51577C3.63725 10.8447 4.08851 11.9671 4.99037 12.8831C5.89223 13.7991 6.99897 14.2568 8.31058 14.2561"
                    fill="white"
                    style={{ fill: "white", fillOpacity: 1 }}
                  />
                </svg>
              </div>
            </Link>

            <Link to={"/my-cart"}>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <path
                    d="M15.5371 20.2317C15.5371 20.4975 15.4405 20.7524 15.2687 20.9403C15.0968 21.1283 14.8638 21.2339 14.6208 21.2339C14.3777 21.2339 14.1447 21.1283 13.9728 20.9403C13.801 20.7524 13.7045 20.4975 13.7045 20.2317C13.7045 19.9659 13.801 19.711 13.9728 19.523C14.1447 19.3351 14.3777 19.2295 14.6208 19.2295C14.8638 19.2295 15.0968 19.3351 15.2687 19.523C15.4405 19.711 15.5371 19.9659 15.5371 20.2317ZM5.25901 15.9563L4.39311 5.03241C4.37993 4.84329 4.30188 4.66662 4.17459 4.53781C4.04731 4.40901 3.88022 4.33759 3.70681 4.33789H2.82167C2.70016 4.33789 2.58363 4.28509 2.49771 4.19112C2.41179 4.09715 2.36353 3.96969 2.36353 3.83679C2.36353 3.70389 2.41179 3.57644 2.49771 3.48246C2.58363 3.38849 2.70016 3.33569 2.82167 3.33569H3.70681C4.11116 3.33543 4.50067 3.50225 4.79734 3.80276C5.09401 4.10326 5.27592 4.51526 5.30666 4.95624L5.43402 6.77823H17.3733C18.1842 6.77823 18.8183 7.5399 18.7422 8.41983L18.1302 15.9563C18.077 16.5777 17.8137 17.1549 17.3919 17.5751C16.9701 17.9954 16.4201 18.2283 15.8495 18.2283H7.53966C6.9691 18.2283 6.41909 17.9954 5.99727 17.5751C5.57544 17.1549 5.31218 16.5777 5.25901 15.9563ZM5.51007 7.78043L6.17164 15.8641C6.20379 16.2366 6.36181 16.5827 6.6148 16.8345C6.86778 17.0864 7.19756 17.226 7.53966 17.2261H15.8495C16.1916 17.226 16.5214 17.0864 16.7744 16.8345C17.0274 16.5827 17.1854 16.2366 17.2175 15.8641L17.8296 8.32963C17.8358 8.26006 17.8285 8.18986 17.8084 8.12354C17.7882 8.05722 17.7556 7.99624 17.7126 7.94452C17.6697 7.89279 17.6173 7.85148 17.5588 7.82322C17.5004 7.79496 17.4372 7.78038 17.3733 7.78043H5.51007ZM9.59124 20.2317C9.59124 20.4975 9.4947 20.7524 9.32286 20.9403C9.15102 21.1283 8.91796 21.2339 8.67495 21.2339C8.43193 21.2339 8.19887 21.1283 8.02703 20.9403C7.85519 20.7524 7.75865 20.4975 7.75865 20.2317C7.75865 19.9659 7.85519 19.711 8.02703 19.523C8.19887 19.3351 8.43193 19.2295 8.67495 19.2295C8.91796 19.2295 9.15102 19.3351 9.32286 19.523C9.4947 19.711 9.59124 19.9659 9.59124 20.2317Z"
                    fill="white"
                    style={{ fill: "white", fillOpacity: 1 }}
                  />
                </svg>
              </div>
            </Link>

            {!localStorage.getItem("token") && (
              <Link to={"/auth"}>
                <div className="hidden md:flex rounded-full  bg-white text-black p-3 cursor-pointer">
                  <span className=" sm:block auth_button_content">
                    Sign in - Sign up
                  </span>
                </div>
              </Link>
            )}

            {localStorage.getItem("token") && (
              <Link to={"/profile"}>
                <div className="hidden md:flex rounded-full  bg-white text-black p-3 cursor-pointer">
                  <span className=" sm:block auth_button_content">Profile</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
