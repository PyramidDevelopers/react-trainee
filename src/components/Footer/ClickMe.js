import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Logo from "../Header/Logo";
import "./ClickMe.css";

function ClickMe() {
  const { count, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="clickme-btn" onClick={toggleTheme}>
      <Logo />
      <span className={`clickme-text theme-${count}-color`}>
        Click <br />
        Me&gt;
      </span>
    </button>
  );
}

export default ClickMe;
