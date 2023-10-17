import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";
import "../styles/searchbar.css";
import { useContext } from "react";
import { DarkModeContext } from "../App";
import { uniqueRegion } from "../assets/uniqueRegion";
import { UniqueSubRegion } from "../assets/uniqueSubregion";

function Searchbar({
  data,
  setCountry,
  setRegion,
  region,
  setSubRegion,
  setSort,
}) {
  const [darkMode] = useContext(DarkModeContext);

  const uniqueRegions = uniqueRegion(data);

  const uniqueSubRegions = UniqueSubRegion(data, region);

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
        <select
          onChange={(e) => {
            setRegion(e.target.value);
            setSubRegion("");
          }}
        >
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
      <div className={"drop-down-container"}>
        <select onChange={(e) => setSubRegion(e.target.value)}>
          <option value="" defaultValue={true} hidden>
            Filter by Subregion
          </option>
          <option value="" className="options">
            All Subregion
          </option>
          {data
            ? uniqueSubRegions.map((element) => {
                return element ? (
                  <option className="options" key={element} value={element}>
                    {element}
                  </option>
                ) : null;
              })
            : ""}
        </select>
      </div>
      <div className={"drop-down-container"}>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="" defaultValue={true} hidden>
            Sort by
          </option>
          <option value="area-up" className="options">
            Area &#8593;
          </option>
          <option value="area-down" className="options">
            Area &#8595;
          </option>
          <option value="pop-up" className="options">
            Population &#8593;
          </option>
          <option value="pop-down" className="options">
            Population &#8595;
          </option>
        </select>
      </div>
    </div>
  );
}

Searchbar.propTypes = {
  data: PropTypes.array,
  setCountry: PropTypes.func,
  setRegion: PropTypes.func,
  setSubRegion: PropTypes.func,
  region: PropTypes.string,
  setSort: PropTypes.func,
};

export default Searchbar;
