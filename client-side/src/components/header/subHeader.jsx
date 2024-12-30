import React from "react";

export default function subHeader() {
  return (
    <div className="subHeader text-gray-600 border-b-2 font-normal text-sm py-4">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row font-medium justify-between items-center">
          {/* address */}
          <div className=" flex justify-between font-normal  items-center gap-2">
            <span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z"
                  stroke="#666666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z"
                  stroke="#666666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          {/* change currency and language */}
          <div className="flex cursor-pointer justify-between items-center gap-2">
            {/* language */}
            <div className="flex justify-between items-center gap-2">
              <span className="uppercase">eng</span>
              <span className="">
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  className="text-gray-900" /* Apply Tailwind class for color */
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.25L4.5 4.75L1 1.25"
                    stroke="currentColor" /* Use currentColor for stroke */
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            {/* currency */}
            <div className="flex justify-between items-center gap-2">
              <span className="uppercase">usd</span>
              <span>
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  className="text-gray-900" /* Apply Tailwind class for color */
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.25L4.5 4.75L1 1.25"
                    stroke="currentColor" /* Use currentColor for stroke */
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
