import React from "react";
import Layout from "../../layout/layout";
import Featured from "../../featured/featured";
import Brand from "../../brands/brand";
import Hero from "../../hero/hero";
import Categores from "../../categores/categores";
import PopularProducts from "../../popular-products/popularProducts";
export default function home() {
  return (
    <>
      <Layout>
        <Hero />
        <Featured />
        <Categores />
        <PopularProducts />
        <Brand />
      </Layout>
    </>
  );
}
