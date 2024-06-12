import ToggleComponent from "./ToggleComponent";
import { useValue } from "../context/ContextProvider";

const TestReducer = () => {
  const {
    state: { toggleComponent },
    dispatch,
  } = useValue();

  console.log(toggleComponent, "<==toggleComponent");

  const handleToggleComponent = () => {
    dispatch({ type: "SHOW_COMPONENT" });
  };

  const showComponent = () => {
    dispatch({ type: "HIDE_COMPONENT" });
  };

  return (
    <div>
      <h1>TestReducer</h1>
      <button onClick={handleToggleComponent}>SHOW Component</button>
      <button onClick={showComponent}>HIDE Component</button>
      {toggleComponent && <ToggleComponent />}
    </div>
  );
};

export default TestReducer;
