import React, { useContext } from "react";
import logo from "../../assets/Group-8.svg";
import { ThemeContext } from "../../ThemeContext";
import "./ClickMe.css";

function ClickMe() {
  const { count, toggleTheme } = useContext(ThemeContext);
  console.log(count);
  return (
    <button className="clickme-btn" onClick={toggleTheme}>
      <img className="clickme-logo" src={logo} alt="Pyramid Developers Logo" />
      <span className="clickme-text">
        Click <br />
        Me&gt;
      </span>
    </button>
  );
}

export default ClickMe;
