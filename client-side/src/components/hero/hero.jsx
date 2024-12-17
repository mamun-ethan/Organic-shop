import React from "react";
import BannerBig from "../../assets/image/BannarBig.png";
import BannerSmallOne from "../../assets/image/Banner-1.png";
import BannerSmallTwo from "../../assets/image/Banner-2.png";

export default function hero() {
  return (
    <div className="my-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-6 gap-4 h-screen">
          {/* Big Banner */}
          <div className="col-span-1 md:col-span-2 row-span-3 md:row-span-6 h-full">
            <div
              className="w-full h-full relative rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${BannerBig})` }}
            >
              {/* content */}
              <div className="absolute flex flex-col gap-1 md:gap-6 m-2 md:m-5 md:top-1/3">
                <div>
                  <h1 className="capitalize text-xl md:text-5xl font-semibold text-white">
                    Fresh & Healthy <br /> Organic Food
                  </h1>
                </div>
                <div className="flex items-center  text-sm md:text-xl font-medium text-white capitalize  gap-2 md:gap-5">
                  <span className="">Sale up to</span>
                  <span className="bg-warning px-2 md:px-3  md:py-2 rounded-lg">
                    30% OFF
                  </span>
                </div>
                <div className="">
                  <a href="#" className="shop-btn">
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
                      />
                      <path
                        d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                        stroke="#00B307"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Small Banner One */}
          <div className="row-span-3 col-span-1 h-full">
            <div
              className="w-full h-full relative rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${BannerSmallOne})` }}
            >
              <div className="absolute flex flex-col gap-5 left-5 top-1/4">
                <div className="flex flex-col gap-2 ">
                  <h6 className="uppercase text-gray-900 font-medium text-base">
                    summber
                  </h6>
                  <h2 className="uppercase text-gray-900 font-semibold text-4xl">
                    75% off
                  </h2>
                  <span className="text-gray-600 font-normal capitalize">
                    Only Fruit & Vegetable
                  </span>
                </div>
                {/* button */}
                <div>
                  <a
                    href="#"
                    className="  inline-flex items-center  text-sm md:text-base  font-semibold text-success hover:text-successDark gap-1 md:gap-2 "
                  >
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
                      />
                      <path
                        d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                        stroke="#00B307"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Small Banner Two */}
          <div className="row-span-3 col-span-1 h-full">
            <div
              className="w-full h-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${BannerSmallTwo})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
