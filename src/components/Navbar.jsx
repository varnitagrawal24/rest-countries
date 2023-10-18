import { useContext } from "react";
import "../styles/navbar.css";
import { BiMoon, BiSolidMoon } from "react-icons/bi";
import { StateContext } from "../context/ContextProvider";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(StateContext);

  return (
    <nav className={(darkMode ? "main-nav-dark " : "") + "main-nav"}>
      <div className={darkMode ? "nav-head-dark" : "nav-head-light"}>
        Where in the world?
      </div>
      <div
        className={darkMode ? "mode-dark" : "mode-light"}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BiSolidMoon /> : <BiMoon />} Dark Mode
      </div>
    </nav>
  );
}

export default Navbar;
