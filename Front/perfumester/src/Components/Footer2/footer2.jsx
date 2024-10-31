import React from "react";
import "./style.css";

import Twitter from "../../Assets/Footer/twitter.png";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <>
      <div className="w-full bg-black text-white">
        <div className="hidden lg:flex p-3  flex-col w-2/3 m-auto gap-10">
          <div className=" text-center flex flex-col gap-2">
            <h1 className="footer_title text-xl">PERFUMSTER</h1>
            <h5 className="footer_subtitle">DECANTED PERFUMES</h5>
          </div>

          <div className="flex flex-row gap-20 justify-center">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="footer_title_links">Main Pages</h1>
              <Link to={"/new"}>
                <h1>New</h1>
              </Link>
              <Link to={"/for-him"}>
                <h1>Men</h1>
              </Link>
              <Link to={"/for-her"}>
                <h1>Women</h1>
              </Link>
              <Link to={"/subscription"}>
                <h1>Subscription</h1>
              </Link>
            </div>
            <span className="vertical_line transparent"></span>
            <div className="flex flex-col gap-4 items-center">
              <h1 className="footer_title_links">Get to know us </h1>
              <Link to={"/about-us"}>
                <h1>About us</h1>
              </Link>

              <Link to={"/contact-us"}>
                <h1>Contact us</h1>
              </Link>
              <h1>Connect</h1>
            </div>
          </div>
        </div>

        {/* Mobile Desgin */}
        <div className="lg:hidden flex flex-col p-3 w-11/12 m-auto gap-10">
          <div className=" text-center flex flex-col gap-2">
            <h1 className="footer_title">PERFUMSTER</h1>
            <p className="footer_subtitle text-[50%]">DECANTED PERFUMES</p>
          </div>

          <div className="w-full flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-10 justify-between font-thin">
              <h1 className="footer_title_links text-sm ">Main Pages</h1>
              <div className="flex flex-row gap-10 justify-between font-thin pl-6">
                <div className="flex flex-col gap-6 items-center text-[0.1em]">
                  <Link to={"/new"}>
                    <h1>New</h1>
                  </Link>

                  <Link to={"/for-her"}>
                    <h1>Women</h1>
                  </Link>
                </div>

                <span className="vertical_line transparent"></span>

                <div className="flex flex-col gap-6 items-center text-[0.1em]">
                  <Link to={"/for-him"}>
                    <h1>Men</h1>
                  </Link>

                  <Link to={"/subscription"}>
                    <h1>Subscription</h1>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-11/12 m-auto items-center justify-center gap-6">
              <h1 className="footer_title_links text-sm ">Get to know us</h1>

              <div className="w-2/3 sm:w-1/3 m-auto flex flex-col gap-6 items-center justify-between font-thin">
                <div className="flex w-full flex-row gap-6 justify-between items-center text-[0.1em]">
                  <Link to={"/about-us"}>
                    <h1>About Us</h1>
                  </Link>

                  <Link to={"/contact-us"}>
                    <h1>Contact Us</h1>
                  </Link>
                </div>
                <h1 className="text-[0.1em]">Connect</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-full w-2/3 flex flex-row items-center justify-center m-auto gap-6 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M23.7546 7.30907H8.19496C5.14091 7.30907 2.66699 9.75632 2.66699 12.7757V20.4682C2.66699 23.4875 5.14224 25.9361 8.19496 25.9361H23.7546C26.8087 25.9361 29.2826 23.4875 29.2826 20.4682V12.7757C29.2826 9.75632 26.8073 7.30774 23.7546 7.30774V7.30907ZM20.0164 16.9954L12.7387 20.4295C12.6943 20.4509 12.6452 20.4607 12.596 20.458C12.5468 20.4553 12.4991 20.4402 12.4573 20.4141C12.4155 20.388 12.381 20.3518 12.357 20.3088C12.333 20.2658 12.3202 20.2174 12.3199 20.1681V13.0878C12.3208 13.0383 12.3342 12.9898 12.3589 12.9468C12.3836 12.9039 12.4187 12.8679 12.4611 12.8422C12.5034 12.8165 12.5515 12.802 12.601 12.7999C12.6505 12.7978 12.6997 12.8083 12.744 12.8304L20.0231 16.4779C20.0716 16.5021 20.1122 16.5394 20.1404 16.5857C20.1687 16.6319 20.1832 16.6852 20.1825 16.7394C20.1819 16.7936 20.1659 16.8464 20.1365 16.8919C20.1071 16.9375 20.0655 16.9738 20.0164 16.9967V16.9954Z"
              fill="white"
              style={{ fill: "white", fillOpacity: 1 }}
            />
          </svg>

          <img src={Twitter} width={20} height={20} alt="" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M12.7494 8.44001V12.1049H10.0635V16.5859H12.7494V29.9037H18.2627V16.5873H21.9636C21.9636 16.5873 22.3104 14.4388 22.4784 12.0889H18.2854V9.02414C18.2854 8.5667 18.8856 7.95056 19.4804 7.95056H22.4864V3.28546H18.4001C12.6121 3.28546 12.7494 7.77052 12.7494 8.44001Z"
              fill="white"
              style={{ fill: "white", fillOpacity: 1 }}
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M21.391 3.28546H10.6285C8.52551 3.28793 6.50941 4.12452 5.02252 5.61166C3.53563 7.0988 2.69938 9.11504 2.69727 11.218L2.69727 21.9805C2.69974 24.0835 3.53632 26.0996 5.02346 27.5865C6.5106 29.0734 8.52684 29.9096 10.6298 29.9117H21.3923C23.4953 29.9093 25.5114 29.0727 26.9983 27.5855C28.4852 26.0984 29.3214 24.0821 29.3235 21.9792V11.2167C29.3211 9.1137 28.4845 7.09761 26.9973 5.61071C25.5102 4.12382 23.494 3.28758 21.391 3.28546V3.28546ZM26.6456 21.9792C26.6456 22.6692 26.5097 23.3525 26.2456 23.99C25.9815 24.6275 25.5945 25.2068 25.1065 25.6947C24.6186 26.1827 24.0393 26.5697 23.4018 26.8338C22.7643 27.0978 22.081 27.2338 21.391 27.2338H10.6285C9.2351 27.2334 7.89892 26.6796 6.91378 25.6943C5.92865 24.7089 5.37523 23.3726 5.37523 21.9792V11.2167C5.37558 9.82329 5.92934 8.48712 6.91473 7.50198C7.90011 6.51685 9.23643 5.96342 10.6298 5.96342H21.3923C22.7857 5.96378 24.1219 6.51754 25.107 7.50292C26.0921 8.48831 26.6456 9.82463 26.6456 11.218V21.9805V21.9792Z"
              fill="white"
              style={{ fill: "white", fillOpacity: 1 }}
            />
            <path
              d="M16.0103 9.71225C14.1851 9.71507 12.4355 10.4415 11.145 11.7322C9.8545 13.0229 9.12845 14.7727 9.12598 16.5979C9.12809 18.4235 9.85418 20.1738 11.145 21.4649C12.4358 22.7559 14.1859 23.4824 16.0116 23.4848C17.8375 23.4827 19.588 22.7564 20.8791 21.4653C22.1702 20.1742 22.8964 18.4238 22.8985 16.5979C22.8957 14.7722 22.169 13.0222 20.8777 11.7317C19.5863 10.4411 17.8359 9.71535 16.0103 9.71358V9.71225ZM16.0103 20.8069C14.8943 20.8069 13.8241 20.3636 13.035 19.5745C12.2459 18.7854 11.8026 17.7151 11.8026 16.5992C11.8026 15.4833 12.2459 14.413 13.035 13.6239C13.8241 12.8349 14.8943 12.3915 16.0103 12.3915C17.1262 12.3915 18.1964 12.8349 18.9855 13.6239C19.7746 14.413 20.2179 15.4833 20.2179 16.5992C20.2179 17.7151 19.7746 18.7854 18.9855 19.5745C18.1964 20.3636 17.1262 20.8069 16.0103 20.8069Z"
              fill="white"
              style={{ fill: "white", fillOpacity: 1 }}
            />
            <path
              d="M22.9105 11.414C23.8216 11.414 24.5602 10.6754 24.5602 9.76428C24.5602 8.85317 23.8216 8.11456 22.9105 8.11456C21.9993 8.11456 21.2607 8.85317 21.2607 9.76428C21.2607 10.6754 21.9993 11.414 22.9105 11.414Z"
              fill="white"
              style={{ fill: "white", fillOpacity: 1 }}
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M29.6612 18.9145V28.7554H23.9559V19.5733C23.9559 17.2661 23.1304 15.6924 21.0659 15.6924C19.4895 15.6924 18.5506 16.754 18.1385 17.7795C17.9878 18.1463 17.9491 18.6571 17.9491 19.1705V28.7554H12.2411C12.2411 28.7554 12.3185 13.2051 12.2411 11.5927H17.9491V14.0253L17.9118 14.0813H17.9491V14.0253C18.7067 12.8584 20.0603 11.19 23.0917 11.19C26.8459 11.19 29.6612 13.6439 29.6612 18.9145ZM6.27173 3.32013C4.3206 3.32013 3.04297 4.60043 3.04297 6.28483C3.04297 7.93188 4.28326 9.25086 6.19704 9.25086H6.23439C8.22552 9.25086 9.46181 7.93188 9.46181 6.28483C9.42714 4.60043 8.22685 3.32013 6.27306 3.32013H6.27173ZM3.38172 28.7554H9.08706V11.5927H3.38172V28.7554Z"
              fill="white"
              style={{ fill: "white", fillOpacity: 1 }}
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Footer2;
