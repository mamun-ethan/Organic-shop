import React from "react";
import BestDeal from "../../assets/image/banner/bestdeal.png";
import FatBanner from "../../assets/image/banner/fat.png";
import SummerBanner from "../../assets/image/banner/summer.png";

export default function banner() {
  return (
    <div className="my-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            style={{ backgroundImage: `url(${BestDeal})` }}
            className="bg-cover bg-center bg-no-repeat w-full rounded-sm h-[80vh]"
          >
            <div className="flex flex-col text-white mt-10 justify-between items-center gap-5 ">
              <div>
                <h5 className="uppercase text-lg font-medium ">best deals</h5>
              </div>
              <div>
                <h1 className=" text-3xl md:text-4xl font-semibold capitalize ">
                  sale of this month
                </h1>
              </div>
              {/* timer */}
              <div className="flex flex-row justify-between  gap-0 md:gap-2 items-center">
                <div className="flex  flex-col ">
                  <span className="font-medium text-lg md:text-2xl">00</span>
                  <span className="text-sm md:text-lg uppercase">days</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="8" r="2"></circle>
                    <circle cx="12" cy="16" r="2"></circle>
                  </svg>
                </div>
                <div className="flex  flex-col ">
                  <span className="font-medium text-2xl">02</span>
                  <span className="text-lg uppercase">hours</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="8" r="2"></circle>
                    <circle cx="12" cy="16" r="2"></circle>
                  </svg>
                </div>
                <div className="flex  flex-col ">
                  <span className="font-medium text-lg  md:text-2xl">18</span>
                  <span className="text-sm md:text-lg uppercase">mins</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="8" r="2"></circle>
                    <circle cx="12" cy="16" r="2"></circle>
                  </svg>
                </div>
                <div className="flex  flex-col ">
                  <span className="font-medium  text-lg md:text-2xl">46</span>
                  <span className=" text-sm md:text-lg uppercase">secs</span>
                </div>
              </div>
              <div>
                <a href="#" class="shop-btn-bg">
                  <span>shop now</span>
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 7.50055H1.5"
                      stroke="#00B307"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                      stroke="#00B307"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FatBanner})` }}
            className="bg-cover bg-center bg-no-repeat w-full rounded-sm h-[80vh]"
          >
            <div className="flex flex-col text-white mt-10 justify-between items-center gap-5 ">
              <div>
                <h5 className="uppercase text-lg font-medium ">85% fat free</h5>
              </div>
              <div>
                <h1 className=" text-4xl font-semibold capitalize ">
                  low-fat meat
                </h1>
              </div>

              <div className="flex flex-row gap-2 capitalize font-normal text-lg  ">
                <span className="">started at </span>
                <span className=" text-warning font-semibold"> &#36;79.99</span>
              </div>
              {/* button */}

              <div className="mt-7">
                <a href="#" class="shop-btn-bg">
                  <span>shop now</span>
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 7.50055H1.5"
                      stroke="#00B307"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                      stroke="#00B307"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SummerBanner})` }}
            className="bg-cover bg-center rounded-sm bg-no-repeat w-full h-[80vh]"
          >
            <div className="flex flex-col text-gray-900 mt-10 justify-between items-center gap-5 ">
              <div>
                <h5 className="uppercase text-lg font-medium ">summer sale</h5>
              </div>
              <div>
                <h1 className=" text-4xl font-semibold capitalize ">
                  100% Fresh Fruit
                </h1>
              </div>

              <div className="flex flex-row items-center gap-2 capitalize font-normal text-lg  ">
                <span className="">up to </span>
                <span className="  text-lightWarning uppercase bg-gray-900 px-2 py-1 rounded-md font-semibold">
                  {" "}
                  &#36;64 off
                </span>
              </div>
              {/* button */}

              <div className="mt-7">
                <a href="#" class="shop-btn-bg">
                  <span>shop now</span>
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 7.50055H1.5"
                      stroke="#00B307"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                      stroke="#00B307"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
