import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";
import "../styles/searchbar.css";
import { useContext } from "react";
import { DarkModeContext } from "../App";

function Searchbar({ data, setCountry, setRegion }) {
  const [darkMode] = useContext(DarkModeContext);

  let uniqueRegions = new Set();

  data.forEach((element) => {
    uniqueRegions.add(element.region);
  });
  uniqueRegions = Array.from(uniqueRegions).sort();

  return (
    <div
      className={
        (darkMode ? "search-container-dark " : "") + "search-container"
      }
    >
      <div className="input-bar">
        <BiSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className={"drop-down-container"}>
        <select onChange={(e) => setRegion(e.target.value)}>
          <option value="" defaultValue={true} hidden>
            Filter by Region
          </option>
          <option value="" className="options">
            All Region
          </option>
          {data
            ? uniqueRegions.map((element) => {
                return (
                  <option className="options" key={element} value={element}>
                    {element}
                  </option>
                );
              })
            : ""}
        </select>
      </div>
    </div>
  );
}

Searchbar.propTypes = {
  data: PropTypes.array,
  setCountry: PropTypes.func,
  setRegion: PropTypes.func,
};

export default Searchbar;
