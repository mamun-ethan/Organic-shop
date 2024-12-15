import React from "react";
import Layout from "../../layout/layout";
import Featured from "../../featured/featured";
import Brand from "../../brands/brand";
export default function home() {
  return (
    <>
      <Layout>
        <Featured />
        <Brand />
      </Layout>
    </>
  );
}
