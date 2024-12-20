import React from "react";
import FreshFruit from "../../assets/image/categores/fruit.png";
import Vegatable from "../../assets/image/categores/vegtable.png";
import Meat from "../../assets/image/categores/meat.png";
import Snaks from "../../assets/image/categores/snaks.png";
import Beverages from "../../assets/image/categores/beverages.png";
import Beauty from "../../assets/image/categores/beauty.png";
import Bread from "../../assets/image/categores/bread.png";
import Baking from "../../assets/image/categores/baking.png";
import Cooking from "../../assets/image/categores/cooking.png";
import Diabetic from "../../assets/image/categores/diabetic.png";
import Wash from "../../assets/image/categores/wash.png";
import Oil from "../../assets/image/categores/oil.png";

const Categores = [
  {
    name: "Fresh Fruit",
    image: FreshFruit,
  },
  {
    name: "Fresh Vegetables",
    image: Vegatable,
  },
  {
    name: "Meat & Fish",
    image: Meat,
  },
  {
    name: "Snacks",
    image: Snaks,
  },
  {
    name: "Beverages",
    image: Beverages,
  },
  {
    name: "Beauty & Health",
    image: Beauty,
  },
  {
    name: "Bread & Bakery",
    image: Bread,
  },
  {
    name: "Baking Needs",
    image: Baking,
  },
  {
    name: "Cooking",
    image: Cooking,
  },
  {
    name: "Diabetic Food",
    image: Diabetic,
  },
  { name: "dish & ditergents", image: Wash },
  {
    name: "Oil",
    image: Oil,
  },
];

export default function categores() {
  return (
    <div className="my-10">
      <div className="container mx-auto px-5">
        <div className="my-8">
          <h1 className="font-semibold text-xl  md:text-4xl capitalize text-start ">
            popular categores
          </h1>
        </div>
        <br />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-6">
          {Categores.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between gap-5 border border-gray-100 shadow hover:shadow-successLight p-2 hover:border-successDark group cursor-pointer rounded-md items-center"
              >
                <img src={items.image} alt="" />
                <h2 className="font-medium group-hover:text-successDark text-lg capitalize">
                  {items.name}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
