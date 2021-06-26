import React from "react";
import GridItem from "./GridItem";
import "./BackgroundGrid.css";

function BackgroundGrid(props) {
  let widthHeightGridArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="background-grid">
      {widthHeightGridArray.map((gridItem) => (
        <GridItem key={gridItem} />
      ))}
    </div>
  );
}

export default BackgroundGrid;
