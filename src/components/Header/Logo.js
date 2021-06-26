import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import logo0 from "../../assets/Group-8.svg";
import logo1 from "../../assets/Group-1.svg";
import logo2 from "../../assets/Group-2.svg";
import logo3 from "../../assets/Group-3.svg";
import logo4 from "../../assets/Group-4.svg";
import logo5 from "../../assets/Group-5.svg";
import logo6 from "../../assets/Group-6.svg";
import logo7 from "../../assets/Group-7.svg";
import "./Logo.css";

function getImageUrl(count) {
  switch (count) {
    case 0:
      return logo0;
    case 1:
      return logo1;
    case 2:
      return logo2;
    case 3:
      return logo3;
    case 4:
      return logo4;
    case 5:
      return logo5;
    case 6:
      return logo6;
    case 7:
      return logo7;
    default:
      return logo0;
  }
}

function Logo() {
  const { count } = useContext(ThemeContext);
  const imageUrl = getImageUrl(count);
  return (
    <div className="logo-background">
      <div className="logo">
        <img src={imageUrl} alt="Brand Logo" />
      </div>
    </div>
  );
}

export default Logo;
