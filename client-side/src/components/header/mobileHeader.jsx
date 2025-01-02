import React from "react";
import Logo from "../../assets/image/logo-footer.png";
export default function mobileHeader() {
  return (
    <div className="sm:hidden relative  ">
      <div className="bg-gray-800 py-5">
        <div className="container mx-auto px-2">
          <div className="flex flex-row justify-between items-center">
            {/* toggle icon */}
            <div>
              <svg
                className="cursor-pointer "
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 7.5H26.25V10H3.75V7.5ZM3.75 13.75H26.25V16.25H3.75V13.75ZM3.75 20H26.25V22.5H3.75V20Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center">
              <img src={Logo} className="w-[80%] cursor-pointer" alt="" />
            </div>
            <div className="flex flex-row  justify-between gap-1 items-end ">
              <div className="cursor-pointer ">
                <svg
                  class="w-6 h-6 stroke-gray-200"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.4999 18L13.8749 14.375"
                    class="stroke-white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="absolute text-[8px] top-2 left-3 bg-successDark rounded-full px-1 text-white border-2">
                  2
                </span>
              </div>
              <div className="cursor-pointer relative">
                <svg
                  width="24"
                  height="24"
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
                  2
                </span>
              </div>
              <div className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0001 14.6667C18.9456 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9456 4 16.0001 4C13.0546 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0546 14.6667 16.0001 14.6667Z"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                  <path
                    d="M20.0001 18.6666H12.0001C8.3174 18.6666 5.02006 22.0666 7.44273 24.8386C9.09073 26.724 11.8161 28 16.0001 28C20.1841 28 22.9081 26.724 24.5561 24.8386C26.9801 22.0653 23.6814 18.6666 20.0001 18.6666Z"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav absolute  top-[70px] left-0 bg-white w-[60%] h-[70vh]">
        {/* close btn */}
        <div className="flex w-full  mt-3 justify-end">
          <svg
            class="mr-4 w-7 h-7 fill-gray-700"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.46665 22.1667L5.83331 20.5333L12.3666 14L5.83331 7.46666L7.46665 5.83333L14 12.3667L20.5333 5.83333L22.1666 7.46666L15.6333 14L22.1666 20.5333L20.5333 22.1667L14 15.6333L7.46665 22.1667Z"
              class="fill-gray-700"
            />
          </svg>
        </div>
        {/* menu */}
        <div className="w-full my-4 font-medium text-base text-gray-700 group px-5">
          <ul className=" flex flex-col justify-between gap-5">
            <li className="flex group-hover:text-gray-900 cursor-pointer justify-between  capitalize items-center">
              <a href="#">Home</a>{" "}
              <span>
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25352 17.4062H5.6338V10.8789H12.3944V17.4062H15.7746V7.61523L9.01408 2.71973L2.25352 7.61523V17.4062ZM0 19.582V6.52734L9.01408 0L18.0282 6.52734V19.582H10.1408V13.0547H7.88732V19.582H0Z"
                    fill="#666666"
                  />
                </svg>
              </span>
            </li>
            <li className="flex group-hover:text-gray-900 cursor-pointer justify-between  capitalize items-center">
              <a href="#">shop</a>{" "}
              <span>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33335 5.91422L8.00002 10.5809L12.6667 5.91422"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li className="flex group-hover:text-gray-900 cursor-pointer justify-between  capitalize items-center">
              <a href="#">pages</a>{" "}
              <span>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33335 5.91422L8.00002 10.5809L12.6667 5.91422"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li className="flex group-hover:text-gray-900 cursor-pointer justify-between  capitalize items-center">
              <a href="#">blog</a>{" "}
              <span>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33335 5.91422L8.00002 10.5809L12.6667 5.91422"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li className="flex group-hover:text-gray-900 cursor-pointer justify-between  capitalize items-center">
              <a href="#">about</a>{" "}
            </li>
            <li className="flex  group-hover:text-gray-900 cursor-pointer justify-between  capitalize items-center">
              <a href="#">contact</a>{" "}
            </li>
          </ul>
        </div>
        {/* wishlist */}
        <div className="flex flex-row relative justify-end px-5 items-center">
          <svg
            width="25"
            height="24"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8369 24.7983C-11.8293 10.0595 6.83739 -5.94055 14.8369 4.17686C22.8374 -5.94055 41.504 10.0595 14.8369 24.7983Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
            />
          </svg>
          <span className="absolute text-[8px]  bg-successDark rounded-full px-1 text-white border-2">
            2
          </span>
        </div>
      </div>
    </div>
  );
}
