import React from "react";
import "./BackgroundBoxItem.css";

function BackgroundBoxItem(props) {
  return <div className="background-box">{props.children}</div>;
}

export default BackgroundBoxItem;
