import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ContextProvider from "./context/ContextProvider";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:id" element={<DetailPage/>}/>
        <Route path="*" element={<h1 className="error">Not Found...</h1>}/>
      </Routes>
    </ContextProvider>
  );
}

export default App;
