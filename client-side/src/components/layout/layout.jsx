import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
}
