import React, { useContext } from "react";
import "./HeaderButton.css";
import { ThemeContext } from "../../ThemeContext";

function HeaderButton() {
  const { count, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="header-button-container">
      <button
        className={`header-button theme-${count}-background`}
        onClick={toggleTheme}
      >
        CLICK
        <br /> ME&gt;
      </button>
    </div>
  );
}

export default HeaderButton;
