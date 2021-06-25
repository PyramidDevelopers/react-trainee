import React from "react";
import logo from "../../assets/Group-8.svg";
import "./ClickMe.css";

function ClickMe() {
  return (
    <button className="clickme-btn">
      <img className="clickme-logo" src={logo} alt="Pyramid Developers Logo" />
      <span className="clickme-text">
        Click <br />
        Me&gt;
      </span>
    </button>
  );
}

export default ClickMe;
