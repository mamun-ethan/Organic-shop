import React from "react";

export default function Navbar() {
  return (
    // navbar
    <div className="bg-gray-800 py-5">
      <div className="container mx-auto px-5">
        <div className="flex flex-row justify-between items-center">
          {/* navigation */}
          <div>
            <ul className="flex flex-row cursor-pointer capitalize font-medium text-base text-gray-400 justify-between items-center gap-5">
              <li className="flex flex-row justify-between items-center gap-2 hover:text-gray-200 group">
                <span className="group-hover:text-gray-200">Home</span>
                <span>
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    className="text-gray-400 group-hover:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.25L4.5 4.75L1 1.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>

              <li className="flex flex-row justify-between items-center gap-2 hover:text-gray-200 group">
                <span className="group-hover:text-gray-200">shop</span>
                <span>
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    className="text-gray-400 group-hover:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.25L4.5 4.75L1 1.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex flex-row justify-between items-center gap-2 hover:text-gray-200 group">
                <span className="group-hover:text-gray-200">pages</span>
                <span>
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    className="text-gray-400 group-hover:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.25L4.5 4.75L1 1.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex flex-row justify-between items-center gap-2 hover:text-gray-200 group">
                <span className="group-hover:text-gray-200">blog</span>
                <span>
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    className="text-gray-400 group-hover:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.25L4.5 4.75L1 1.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li className="hover:text-gray-200">about</li>
              <li className="hover:text-gray-200">contact</li>
            </ul>
          </div>
          {/* card,wish list ,user */}
          <div className="flex flex-row  justify-between items-end gap-4">
            <div className="cursor-pointer relative">
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9995 28.0722C-10.6667 13.3333 7.99999 -2.66667 15.9995 7.45074C24 -2.66667 42.6666 13.3333 15.9995 28.0722Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
              <span className="absolute text-[8px] top-2 left-3 bg-successDark rounded-full px-1 text-white border-2">
                2
              </span>
            </div>
            <div className="cursor-pointer relative">
              <svg
                width="25"
                height="25"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3333 14.1667H7.08333L4.25 29.75H29.75L26.9167 14.1667H22.6667M11.3333 14.1667V9.91667C11.3333 6.78705 13.8704 4.25 17 4.25V4.25C20.1296 4.25 22.6667 6.78705 22.6667 9.91667V14.1667M11.3333 14.1667H22.6667M11.3333 14.1667V18.4167M22.6667 14.1667V18.4167"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="absolute text-[8px] top-2 left-3 bg-successDark rounded-full px-1 text-white border-2">
                9
              </span>
            </div>
            <div className="cursor-pointer">
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0001 14.6667C18.9456 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9456 4 16.0001 4C13.0546 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0546 14.6667 16.0001 14.6667Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M20.0001 18.6666H12.0001C8.3174 18.6666 5.02006 22.0666 7.44273 24.8386C9.09073 26.724 11.8161 28 16.0001 28C20.1841 28 22.9081 26.724 24.5561 24.8386C26.9801 22.0653 23.6814 18.6666 20.0001 18.6666Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
