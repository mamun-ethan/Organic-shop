import React from "react";
import logo from "../../assets/image/Logo.png";

export default function mainHeader() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center gap-2">
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* searchbar */}
          <div className="w-full">
            <form class="w-96 mx-auto">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.4999 18L13.8749 14.375"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full py-3 px-2 pl-10 rounded-l text-sm text-gray-900 border  bg-gray-50 border-gray-300 focus:outline-none "
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  class="absolute right-0 bottom-0 top-0 bg-success text-white font-semibold text-sm tracking-wider px-4 py-2 rounded-l  "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* contac */}
          <div className="flex justify-between items-center gap-2">
            <span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-900"
              >
                <path
                  d="M17.4359 4.375C18.9193 4.77396 20.2718 5.55567 21.358 6.64184C22.4441 7.72801 23.2258 9.08051 23.6248 10.5639"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5306 7.75687C17.4205 7.99625 18.2318 8.46521 18.8833 9.11678C19.5349 9.76835 20.0039 10.5797 20.2433 11.4695"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.115 13.6517C11.0224 15.5074 12.5263 17.0049 14.3859 17.9042C14.522 17.9688 14.6727 17.9966 14.8229 17.9851C14.9731 17.9736 15.1178 17.9231 15.2425 17.8386L17.9812 16.0134C18.1022 15.9326 18.2414 15.8833 18.3862 15.8698C18.5311 15.8564 18.677 15.8793 18.8107 15.9364L23.9339 18.1326C24.1079 18.2065 24.2532 18.335 24.3479 18.4987C24.4426 18.6623 24.4815 18.8523 24.4589 19.04C24.2967 20.307 23.6784 21.4714 22.7196 22.3154C21.7608 23.1593 20.5273 23.6249 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75C4.37512 7.47279 4.84074 6.23941 5.68471 5.28077C6.52867 4.32213 7.6931 3.70396 8.96 3.542C9.14771 3.51936 9.33769 3.55832 9.50134 3.653C9.66499 3.74769 9.79345 3.89298 9.86738 4.067L12.0654 9.1945C12.1219 9.32698 12.1449 9.47137 12.1322 9.61485C12.1195 9.75833 12.0716 9.89647 11.9928 10.017L10.1728 12.7977C10.0901 12.923 10.0414 13.0675 10.0313 13.2171C10.0212 13.3668 10.05 13.5165 10.115 13.6517V13.6517Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="flex text-gray-900 font-medium text-xl justify-between items-start gap-2">
              <span>+880</span>
              <span>1959674025</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
