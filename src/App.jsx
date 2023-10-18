import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <HomePage />
    </ContextProvider>
  );
}

export default App;
