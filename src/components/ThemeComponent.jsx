import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height:"100vh",
    border:"1px solid red",
  };

  return (
    <div style={style}>
      <p>The current theme is {theme} </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeComponent;
