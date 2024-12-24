import React from "react";
import ImageOne from "../../assets/image/news/image-1.png";
import ImageTwo from "../../assets/image/news/image-2.png";
import ImageThree from "../../assets/image/news/image-3.png";

export default function news() {
  const NewsData = [
    {
      image: ImageOne,
      Category: "food",
      date: "18 nov 2024",
      role: "admin",
      comments: 65,
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
    },
    {
      image: ImageTwo,
      Category: "food",
      date: "29 Jan 2024",
      role: "admin",
      comments: 22,
      title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    },
    {
      image: ImageThree,
      Category: "food",
      date: "21 feb 2024",
      role: "admin",
      comments: 34,
      title: "Maecenas blandit risus elementum mauris malesuada.",
    },
  ];
  return (
    <div className="my-10">
      <div className="container mx-auto px-5">
        <div class="my-8 ">
          <h1 class="font-semibold text-xl  md:text-4xl capitalize text-center ">
            latest news
          </h1>
        </div>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NewsData.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full justify-between rounded-md shadow-xl  items-center gap-2"
              >
                <div className=" w-full h-2/3">
                  <img className="w-full rounded-md" src={items.image} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start  p-5 gap-2">
                  <div className="flex flex-row justify-between items-center gap-2">
                    <div className="flex gap-2 capitalize text-sm text-gray-700">
                      <span>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.1583 11.6748L11.1833 17.6498C11.0285 17.8048 10.8447 17.9277 10.6424 18.0116C10.4401 18.0955 10.2232 18.1386 10.0042 18.1386C9.78513 18.1386 9.56825 18.0955 9.36592 18.0116C9.16359 17.9277 8.97978 17.8048 8.82499 17.6498L1.66666 10.4998V2.1665H9.99999L17.1583 9.32484C17.4687 9.63711 17.643 10.0595 17.643 10.4998C17.643 10.9401 17.4687 11.3626 17.1583 11.6748V11.6748Z"
                            stroke="#B3B3B3"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.83331 6.33301H5.84165"
                            stroke="#B3B3B3"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{items.Category}</span>
                    </div>
                    <div className="flex gap-2 capitalize text-sm text-gray-700">
                      <span className="flex flex-row gap-1 text-gray-300">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99993 9.66667C11.8409 9.66667 13.3333 8.17428 13.3333 6.33333C13.3333 4.49238 11.8409 3 9.99993 3C8.15898 3 6.6666 4.49238 6.6666 6.33333C6.6666 8.17428 8.15898 9.66667 9.99993 9.66667Z"
                            stroke="#B3B3B3"
                            stroke-width="1.2"
                          />
                          <path
                            d="M12.4999 12.1665H7.49995C5.19828 12.1665 3.13745 14.2915 4.65161 16.024C5.68161 17.2023 7.38495 17.9998 9.99995 17.9998C12.6149 17.9998 14.3174 17.2023 15.3474 16.024C16.8624 14.2907 14.8008 12.1665 12.4999 12.1665Z"
                            stroke="#B3B3B3"
                            stroke-width="1.2"
                          />
                        </svg>
                        by
                      </span>
                      <span>{items.role}</span>
                    </div>
                    <div className="flex gap-2 capitalize text-sm text-gray-700">
                      <span className="flex flex-row gap-1 text-gray-300">
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5238 14.2728L9.48206 16.0087C9.43209 16.092 9.36139 16.1609 9.27687 16.2088C9.19234 16.2566 9.09686 16.2818 8.99972 16.2818C8.90258 16.2818 8.8071 16.2566 8.72257 16.2088C8.63804 16.1609 8.56735 16.092 8.51738 16.0087L7.47675 14.2728C7.42671 14.1895 7.35596 14.1206 7.27138 14.0728C7.1868 14.025 7.09128 13.9999 6.99413 14H2.8125C2.66332 14 2.52024 13.9407 2.41475 13.8352C2.30926 13.7298 2.25 13.5867 2.25 13.4375V4.4375C2.25 4.28832 2.30926 4.14524 2.41475 4.03975C2.52024 3.93426 2.66332 3.875 2.8125 3.875H15.1875C15.3367 3.875 15.4798 3.93426 15.5852 4.03975C15.6907 4.14524 15.75 4.28832 15.75 4.4375V13.4375C15.75 13.5867 15.6907 13.7298 15.5852 13.8352C15.4798 13.9407 15.3367 14 15.1875 14H11.0059C10.9088 14 10.8134 14.0252 10.7289 14.073C10.6445 14.1208 10.5738 14.1896 10.5238 14.2728V14.2728Z"
                            stroke="#B3B3B3"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        {items.comments}
                      </span>
                      <span>comments</span>
                    </div>
                  </div>
                  {/* tittle */}
                  <div className="font-medium cursor-pointer text-lg capitalize hover:text-success text-gray-900">
                    <h5>{items.title}</h5>
                  </div>
                  {/* btn */}
                  <div className="flex justify-start items-center capitalize w-full">
                    <a href="#" class="shop-btn">
                      <span>read more</span>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
