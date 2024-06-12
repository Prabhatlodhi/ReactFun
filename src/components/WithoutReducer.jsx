import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const WithoutReducer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    border: "1px solid red",
  };

  const increaceValue = () => {
    setCount(count + 1);
  };

  const decreaceValue = () => {
    setCount(count - 1);
  };

  const handleInputChange = (event) => {
    setInputValue(Number(event.target.value));
  };

  const addToCount = () => {
    setCount(count + inputValue);
  };

  return (
    <div style={style}>
      <h1>WithoutReducer</h1>
      <h1>Count :: {count} </h1>
      <button onClick={increaceValue}>Increment</button>
      <button onClick={decreaceValue}>Decrement</button>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button onClick={addToCount}>Add Value</button>
      </div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default WithoutReducer;
