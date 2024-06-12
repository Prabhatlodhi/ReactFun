import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
  }
  switch (action.type) {
    case "decrement":
      return { count: state.count - 1 };
  }
  switch (action.type) {
    case "reset":
      return { count: 0 };
  }
  switch (action.type) {
    case "addToCount":
      return { count: state.count + action.payload };
  }
}

const Reducers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(Number(event.target.value));
  };

  return (
    <div>
      <h1> Count : {state.count} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button
          onClick={() => dispatch({ type: "addToCount", payload: inputValue })}
        >
          Add Value
        </button>
      </div>
    </div>
  );
};

export default Reducers;
