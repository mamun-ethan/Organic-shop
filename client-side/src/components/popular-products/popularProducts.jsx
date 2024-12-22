import React from "react";
import ReviewSuccess from "../../assets/image/review-success.png";
import Orange from "../../assets/image/popular-products/orange.png";
import Apple from "../../assets/image/popular-products/apple.png";
import Cobbage from "../../assets/image/popular-products/cabbage.png";
import Corn from "../../assets/image/popular-products/corn.png";
import Capsicum from "../../assets/image/popular-products/capsicum.png";
import Chilli from "../../assets/image/popular-products/chilli.png";
import EggPlant from "../../assets/image/popular-products/eggPlant.png";
import Potato from "../../assets/image/popular-products/potato.png";
import Lettuce from "../../assets/image/popular-products/lattuce.png";
import CauliFlowers from "../../assets/image/popular-products/Cauliflower.png";

export default function popularProducts() {
  const Products = [
    {
      name: "fresh apple",
      image: Apple,
      price: 20,
      offer: 50,
    },
    {
      name: "fresh orange",
      image: Orange,
      price: 30,
      offer: 0,
    },
    {
      name: "Chinese cabbage",
      image: Cobbage,
      price: 45,
      offer: 0,
    },
    {
      name: "Green Lettuce",
      image: Lettuce,
      price: 11,
      offer: 0,
    },
    {
      name: "eggplant",
      image: EggPlant,
      price: 21,
      offer: 0,
    },
    {
      name: "big potatoes",
      image: Potato,
      price: 66,
      offer: 0,
    },
    {
      name: "corn",
      image: Corn,
      price: 19,
      offer: 0,
    },
    {
      name: "Fresh Cauliflower",
      image: CauliFlowers,
      price: 20,
      offer: 0,
    },
    {
      name: "Green Capsicum",
      image: Capsicum,
      price: 28,
      offer: "50%",
    },
    {
      name: "green chilli",
      image: Chilli,
      price: 2,
      offer: 0,
    },
  ];
  return (
    <div className="my-10">
      <div className="container mx-auto px-5">
        <div className="my-8">
          <h1 className="font-semibold text-xl  md:text-4xl capitalize text-start ">
            popular products
          </h1>
        </div>
        <br />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-5">
          {Products.map((items, index) => {
            return (
              <div className="flex flex-col justify-between gap-5 border border-gray-100 shadow hover:shadow-successLight group relative  hover:border-successDark group cursor-pointer rounded-md items-center pb-4 px-5">
                <div>
                  <img src={items.image} alt="" />
                </div>
                {/* title,price & review */}
                <div className="flex justify-between items-center    gap-1 md:gap-7">
                  <div className="capitalize">
                    <div>
                      <h5 className="text-gray-700 group-hover:text-successDark font-normal text-lg">
                        {items.name}
                      </h5>
                    </div>
                    <div className="text-gray-900 font-medium text-sm">
                      <span>&#36;{items.price}</span>
                      <span className="text-gray-400 font-normal">
                        {" "}
                        &#36; 20.99
                      </span>
                    </div>
                    {/* reviews */}
                    <div className="flex flex-row items-center">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                          fill="#FF8A00"
                        />
                      </svg>
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                          fill="#FF8A00"
                        />
                      </svg>

                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                          fill="#FF8A00"
                        />
                      </svg>

                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                          fill="#FF8A00"
                        />
                      </svg>
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.20663 9.44078L8.57101 10.9385C8.87326 11.1298 9.24826 10.8452 9.15863 10.4923L8.47576 7.80541C8.45647 7.73057 8.45869 7.6518 8.48217 7.57816C8.50566 7.50453 8.54945 7.43902 8.60851 7.38916L10.7288 5.62478C11.007 5.39303 10.8638 4.93066 10.5056 4.90741L7.73701 4.72741C7.66246 4.72212 7.59096 4.69577 7.53081 4.65142C7.47066 4.60707 7.42435 4.54656 7.39726 4.47691L6.36451 1.87666C6.33638 1.80276 6.28647 1.73916 6.22137 1.69428C6.15627 1.6494 6.07907 1.62537 6.00001 1.62537C5.92094 1.62537 5.84374 1.6494 5.77864 1.69428C5.71354 1.73916 5.66363 1.80276 5.63551 1.87666L4.60276 4.47691C4.57572 4.54663 4.52943 4.60722 4.46928 4.65164C4.40913 4.69606 4.33759 4.72246 4.26301 4.72778L1.49438 4.90778C1.13663 4.93066 0.992631 5.39303 1.27126 5.62478L3.39151 7.38953C3.4505 7.43936 3.49424 7.50481 3.51772 7.57837C3.54121 7.65193 3.54347 7.73062 3.52426 7.80541L2.89126 10.2973C2.78363 10.7207 3.23401 11.0623 3.59626 10.8324L5.79376 9.44078C5.85552 9.40152 5.92719 9.38066 6.00038 9.38066C6.07357 9.38066 6.14524 9.40152 6.20701 9.44078H6.20663Z"
                          fill="#CCCCCC"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* add to cart */}
                  <div>
                    <svg
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20.5" r="20" fill="#F2F2F2" />
                      <path
                        d="M16.6667 18.8333H14.1667L12.5 28H27.5L25.8333 18.8333H23.3333M16.6667 18.8333V16.3333C16.6667 14.4924 18.1591 13 20 13V13C21.8409 13 23.3333 14.4924 23.3333 16.3333V18.8333M16.6667 18.8333H23.3333M16.6667 18.8333V21.3333M23.3333 18.8333V21.3333"
                        stroke="#1A1A1A"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* wish list icon */}
                <div className="absolute top-1 right-2 hidden group-hover:block">
                  <div className="flex flex-col  justify-between items-center gap-2 ">
                    <div>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="20"
                          cy="20"
                          r="19.5"
                          fill="white"
                          stroke="#F2F2F2"
                        />
                        <path
                          d="M19.9996 27.5451C3.33328 18.3333 14.9999 8.3333 19.9996 14.6567C24.9999 8.3333 36.6666 18.3333 19.9996 27.5451Z"
                          stroke="#1A1A1A"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                    {/* view icon */}
                    <div>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="20"
                          cy="20"
                          r="19.5"
                          fill="white"
                          stroke="#F2F2F2"
                        />
                        <path
                          d="M20 13.541C13.75 13.541 11.25 20.0001 11.25 20.0001C11.25 20.0001 13.75 26.4577 20 26.4577C26.25 26.4577 28.75 20.0001 28.75 20.0001C28.75 20.0001 26.25 13.541 20 13.541V13.541Z"
                          stroke="#1A1A1A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 23.125C20.8288 23.125 21.6237 22.7958 22.2097 22.2097C22.7958 21.6237 23.125 20.8288 23.125 20C23.125 19.1712 22.7958 18.3763 22.2097 17.7903C21.6237 17.2042 20.8288 16.875 20 16.875C19.1712 16.875 18.3763 17.2042 17.7903 17.7903C17.2042 18.3763 16.875 19.1712 16.875 20C16.875 20.8288 17.2042 21.6237 17.7903 22.2097C18.3763 22.7958 19.1712 23.125 20 23.125V23.125Z"
                          stroke="#1A1A1A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* discount & offer */}
                <div className="absolute top-2 left-2">
                  <span className="bg-danger py-1 px-4 capitalize text-sm font-normal text-white rounded-sm">
                    sale 50%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
