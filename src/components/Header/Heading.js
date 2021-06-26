import React, { useContext } from "react";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import { ThemeContext } from "../../ThemeContext";
import "./Heading.css";

function Heading() {
  const { count } = useContext(ThemeContext);
  return (
    <div className="heading-container">
      <div className="heading">
        <Logo />
        <span className={`heading-item theme-${count}-background`}>P</span>
        <span className={`heading-item theme-${count}-background`}>Y</span>
        <span className={`heading-item theme-${count}-background`}>R</span>
        <span className={`heading-item theme-${count}-background`}>A</span>
        <span className={`heading-item theme-${count}-background`}>M</span>
        <span className={`heading-item theme-${count}-background`}>I</span>
        <span className={`heading-item theme-${count}-background`}>D</span>
        <HeaderButton />
      </div>
      <div className={`heading-bottom theme-${count}-color`}>developers</div>
    </div>
  );
}

export default Heading;
