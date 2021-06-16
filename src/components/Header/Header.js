import React from "react";
import BackgroundGrid from "./BackgroundGrid";
import Heading from "./Heading";

function Header() {
  return (
    <div className="main-header container center">
      <BackgroundGrid />
      <Heading />
    </div>
  );
}

export default Header;
