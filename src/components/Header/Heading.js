import React from "react";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import "./Heading.css";

function Heading() {
  return (
    <div className="heading-container">
      <div className="heading">
        <Logo />
        <span className="heading-item">P</span>
        <span className="heading-item">Y</span>
        <span className="heading-item">R</span>
        <span className="heading-item">A</span>
        <span className="heading-item">M</span>
        <span className="heading-item">I</span>
        <span className="heading-item">D</span>
        <HeaderButton />
      </div>
      <div className="heading-bottom">developers</div>
    </div>
  );
}

export default Heading;
