import "./App.css";
// import ThemeComponent from "./components/ThemeComponent";
import { ThemeProvider } from "./context/ThemeContext";
// import WithoutReducer from "./components/WithoutReducer";
import ContextProvider from "./context/ContextProvider";
import TestReducer from "./components/TestReducer";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider>
        {/* <ThemeComponent />
        <WithoutReducer /> */}
        <TestReducer/>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
