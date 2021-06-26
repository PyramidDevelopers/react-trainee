import React, { useState } from "react";

const ThemeContext = React.createContext();

const colors = [
  "orange",
  "pink",
  "green",
  "darkPink",
  "skyBlue",
  "purple",
  "cyan",
  "peach",
];

function ThemeContextProvider(props) {
  const [count, setCount] = useState(0);

  function toggleTheme() {
    setCount((prevCount) => {
      return (prevCount + 1) % colors.length;
    });
  }

  return (
    <ThemeContext.Provider value={{ count, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
