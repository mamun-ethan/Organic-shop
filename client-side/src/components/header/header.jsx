import React from "react";
import Deskop from "./desktop.jsx";
import Mobile from "./mobileHeader.jsx";
export default function header() {
  return (
    <header>
      <Deskop className=" hidden md:block" />
      <Mobile />
    </header>
  );
}
