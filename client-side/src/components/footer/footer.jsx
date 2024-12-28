import React from "react";
import Logo_footer from "../../assets/image/logo-footer.png";

export default function footer() {
  const data = [
    { title: ["my account", "helps", "proxy", "categories"] },
    { items: ["my account", "order history", "shopping cart", "wishlist"] },
    { items: ["contact", "faqs", "terms & condition", "privacy policy"] },
    { items: ["about", "shop", "products", "order track"] },
    {
      items: [
        "Fruit & Vegetables",
        "Meat & Fish",
        "Bread & Bakery",
        "Beauty & Health",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols capitalize md:grid-cols-3 md:gap-16">
          <div className="flex flex-col justify-between gap-3  items-start">
            <div>
              <img src={Logo_footer} alt="" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-normal">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
            </div>
            <div className="flex flex-row  text-white font-medium gap-2 justify-between items-center">
              <span className="border-b-2 border-success">
                (+880)1959674025
              </span>
              <span className="text-greenGray-500">or</span>
              <span className="border-b-2 border-success lowercase">
                ethan.mamun@gmail.com
              </span>
            </div>
          </div>
          <>
            <div className="flex flex-row mx-5 justify-between items-center">
              <div className="text-center">
                <h6 className="text-white text-lg font-medium mb-5 ">
                  my account
                </h6>
                <ul className="text-sm font-normal space-y-5 text-gray-400  ">
                  <li className="hover:text-white">
                    <a href="#">my account</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">my account</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">my account</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">my account</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
