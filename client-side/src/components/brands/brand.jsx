import React from "react";
import BrandOne from "../../assets/image/brands/brand-1.png";
import BrandTwo from "../../assets/image/brands/brand-2.png";
import BrandThree from "../../assets/image/brands/brand-3.png";
import BrandFour from "../../assets/image/brands/brand-4.png";
import BrandFive from "../../assets/image/brands/brand-5.png";
import BrandSix from "../../assets/image/brands/brand-6.png";

export default function brand() {
  return (
    <div className="my-5">
      <div className="container mx-auto px-5">
        <div className="flex flex-row justify-between items-center gap-2">
          <div>
            <img src={BrandOne} alt="" />
          </div>
          <div>
            <img src={BrandTwo} alt="" />
          </div>
          <div>
            <img src={BrandThree} alt="" />
          </div>
          <div>
            <img src={BrandFour} alt="" />
          </div>
          <div>
            <img src={BrandFive} alt="" />
          </div>
          <div>
            <img src={BrandSix} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
