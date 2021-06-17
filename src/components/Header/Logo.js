import React from "react";
import logo from "../../assets/Group-8.svg";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-background">
      <div className="logo">
        <img src={logo} alt="Brand Logo" />
      </div>
    </div>
  );
}

export default Logo;
