import { useEffect, useState } from "react";

const ComponentUseEffect = () => {
  const [count, setCount] = useState(0);
  const [anothercount, setAnotherCount] = useState(50);

  useEffect(() => {
    console.log("FIRST CASE count Case");
  }, [count, anothercount]);

  //Case 1 - when dependaeny array is empty - Console is going to run only once. when the component is going to mount(initial render)
  //Case 2 - Rereddering - State or prop is going to change

  return (
    <div>
      <h1>ComponentUseEffect</h1>
      <h4>COUNTER 1 :: {count} </h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h4>COUNTER 2:: {anothercount} </h4>
      <button onClick={ ()=> setAnotherCount(anothercount + 1) }> INCREMENT</button>
      
    </div>
  );
};

export default ComponentUseEffect;
