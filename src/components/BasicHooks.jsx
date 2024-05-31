import { useState } from "react";

const BasicHooks = () => {
  const [initialValue, setInitialValue] = useState("DummyValue");
  const [initialNumber, setIntialNumber] = useState(0);

//   const Print = () => {
//     setInitialValue("Mohan");
//     console.log("Print something on the console");
//   };

  const increse = () => {
    setIntialNumber(initialNumber + 1);
  };

  const decrease = () => { 
    setIntialNumber(initialNumber - 1);
  };

  return (
    <div>
      {/* <h1>{initialValue}</h1> */}
      <h2>{initialNumber} </h2>
      <button onClick={increse} > ⬆️ </button>
      <button onClick={decrease} > ⬇️ </button>
      {/* <button onClick={Print}>Click here</button> */}
      {/* <button onClick={() => Print("Hello")}>Click here</button> */}
      {/* <button onClick={Print()}>Click here</button>  DO NOT USE THIS */}
    </div>
  );
};

export default BasicHooks;
