import { BiSearch } from "react-icons/bi";
import "../styles/searchbar.css";
import { useContext } from "react";
import { uniqueRegion } from "../assets/uniqueRegion";
import { UniqueSubRegion } from "../assets/uniqueSubregion";
import { StateContext } from "../context/ContextProvider";

function Searchbar() {
  const {
    darkMode,
    data,
    setCountry,
    country,
    setRegion,
    region,
    subRegion,
    setSubRegion,
    setSort,
    sort
  } = useContext(StateContext);

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
          value={country}
        />
      </div>
      <div className={"drop-down-container"}>
        <select
          onChange={(e) => {
            setRegion(e.target.value);
            setSubRegion("");
          }
        }
        value={region}
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
        <select onChange={(e) => setSubRegion(e.target.value)} value={subRegion}>
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
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
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

export default Searchbar;
