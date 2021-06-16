import React from "react";
import logo from "../../assets/Group-8.svg";
import BackgroundBoxItem from "../../utils/BackgroundBoxItem";
import "./Logo.css";

function Logo() {
  return (
    <BackgroundBoxItem>
      <div className="logo-background">
        <div className="logo">
          <img src={logo} alt="Brand Logo" />
        </div>
      </div>
    </BackgroundBoxItem>
  );
}

export default Logo;
