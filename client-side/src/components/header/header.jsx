import React from "react";
import SubHeader from "./subHeader";
import MainHeader from "./mainHeader";
import Navbar from "./navbar";
export default function header() {
  return (
    <header className="hidden md:block">
      <SubHeader />
      <MainHeader />
      <Navbar />
    </header>
  );
}
