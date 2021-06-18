import { React, useContext, useState } from "react";
import Heading from "Components/Heading/";
import WhoAreWe from "Components/WhoAreWe/";
import Footer from "Components/Footer/";
import { ThemeContext } from "Modules/Theme/Context";
import "./HomePage.css";
const HomePage = () => {
  const Color = useContext(ThemeContext);
  const [Theme, setTheme] = useState({ color: "#ffca60" });
  const changeColor = () => {
    setTheme({ color: "Color Changed" });
  };
  return (
    <ThemeContext.Provider value={Theme.color}>
      <div className="Container">
        <Heading />
        <WhoAreWe />
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
