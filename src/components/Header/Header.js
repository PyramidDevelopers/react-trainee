import React from "react";
import BackgroundGrid from "./BackgroundGrid";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

function Header() {
  return (
    <div className="main-header container center">
      <BackgroundGrid />
      <Heading />
      <SubHeading />
    </div>
  );
}

export default Header;
