import React from "react";
import Layout from "../../layout/layout";
import Featured from "../../featured/featured";
import Brand from "../../brands/brand";
import Hero from "../../hero/hero";
import Categores from "../../categores/categores";
import PopularProducts from "../../popular-products/popularProducts";
import Banner from "../../banner/banner.jsx";
import HotDeal from "../../hotDeal/hotDeal.jsx";
import News from "../../news/news.jsx";
import Testimonial from "../../Testimonials/testimonials.jsx";
import DiscountBanner from "../../discountBanner/discountBanner.jsx";
import FeaturedProducts from "../../featuredProduct/featuredProducts.jsx";
import NewsLatter from "../../newsLatter/newsLatter.jsx";
import Social from "../../social/social.jsx";
import Orange from "../../../assets/image/popular-products/orange.png";
import Apple from "../../../assets/image/popular-products/apple.png";
import Cobbage from "../../../assets/image/popular-products/cabbage.png";
import Corn from "../../../assets/image/popular-products/corn.png";
import Capsicum from "../../../assets/image/popular-products/capsicum.png";
import Chilli from "../../../assets/image/popular-products/chilli.png";
import EggPlant from "../../../assets/image/popular-products/eggPlant.png";
import Potato from "../../../assets/image/popular-products/potato.png";
import Lettuce from "../../../assets/image/popular-products/lattuce.png";
import CauliFlowers from "../../../assets/image/popular-products/Cauliflower.png";

export default function home() {
  const products = [
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
    <>
      <Layout>
        <Hero />
        <Featured />
        <Categores />
        <PopularProducts products={products} />
        <Banner />
        <HotDeal products={products} />
        <FeaturedProducts products={products} />
        <DiscountBanner />
        <News />
        <Testimonial />
        <Brand />
        <Social />
        <NewsLatter />
      </Layout>
    </>
  );
}
