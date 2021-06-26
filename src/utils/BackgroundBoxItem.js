import React from "react";
import "./BackgroundBoxItem.css";

function BackgroundBoxItem(props) {
  const backgroundWidth = {
    width: props.width,
    height: props.height,
  };
  return (
    <div className="background-box" style={backgroundWidth}>
      {props.children}
    </div>
  );
}

BackgroundBoxItem.defaultProps = {
  width: "auto",
  height: "auto",
};

export default BackgroundBoxItem;
