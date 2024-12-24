import React from "react";
import DiscountBanner from "../../assets/image/discountBanner/discountbanner.png";
export default function discountBanner() {
  return (
    <div className="my-10">
      <div className="container mx-auto px-5">
        <div
          style={{ backgroundImage: `url(${DiscountBanner})` }}
          className="w-full h-[50vh] rounded-md bg-no-repeat  bg-cover "
        >
          <div className="grid grid-cols-1 h-full lg:grid-cols-2">
            <div></div>
            <div className="flex flex-col h-full lg:mt-7  items-start lg:ml-28 px-5 gap-5 md:gap-2  lg:gap-3">
              <h5 className="uppercase tracking-wider font-medium text-lg text-white">
                summer sale
              </h5>
              <div className="flex font-semibold uppercase text-white text-6xl gap-2 items-center">
                <span className="text-warning">37%</span>
                <span>off</span>
              </div>
              <p className="text-gray-400 text-lg capitalize font-normal">
                Free on all your order, Free Shipping and 30 days money-back
                guarantee
              </p>
              <a href="#" class="shop-btn-success">
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
  );
}
