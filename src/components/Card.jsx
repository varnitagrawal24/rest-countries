import PropTypes from "prop-types";
import "../styles/card.css";
import { useContext } from "react";
import { DarkModeContext } from "../App";

function Card({ country }) {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      className={(darkMode ? "card-container-dark " : "") + "card-container"}
    >
      <img src={country[0].flags.png} />
      <div className="country-name">{country[0].name.common}</div>
      <div className="country-details">
        <div className="population">
          <span>Population: </span>
          {country[0].population}
        </div>
        <div className="region">
          <span>Region: </span>
          {country[0].region}
        </div>
        <div className="capital">
          <span>Capital: </span>
          {country[0].capital}
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  country: PropTypes.array,
};

export default Card;
