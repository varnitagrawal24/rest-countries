import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { StateContext } from "../context/ContextProvider";
import "../styles/detailPage.css";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const { darkMode } = useContext(StateContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        setError(false);
        return response.json();
      })
      .then((data) => {
        setCountryDetail(data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, [id]);

  if (error) {
    return <h1 className="error">Not Found...</h1>;
  }

  if (loader) {
    return <Loader />;
  }

  const country = {
    img: countryDetail[0].flags.svg,
    name: countryDetail[0].name.common,
    nativeName: countryDetail[0].name.nativeName
      ? Object.entries(countryDetail[0].name.nativeName)[0][1].common
      : "None",
    population: countryDetail[0].population,
    region: countryDetail[0].region,
    subregion: countryDetail[0].subregion ? countryDetail[0].subregion : "None",
    capital: countryDetail[0].capital ? countryDetail[0].capital[0] : "None",
    tld: countryDetail[0].tld,
    currencies: countryDetail[0].currencies
      ? Object.entries(countryDetail[0].currencies)[0][1].name
      : "None",
    languages: countryDetail[0].languages
      ? Object.entries(countryDetail[0].languages)
          .map((ele) => ele[1])
          .join(",")
      : "None",
    borders: countryDetail[0].borders ? countryDetail[0].borders : null,
  };

  return (
    <div className={(darkMode ? "main-detail-dark " : "") + "main-detail"}>
      <button
        onClick={() => {
          navigate(-1);
          setLoader(true);
        }}
      >
        <AiOutlineArrowLeft /> Back
      </button>
      <div className="detail-body">
        <img src={country.img} />
        <div className="detail-body-detail">
          <div className="detail-country-name">{country.name}</div>
          <div className="detail-country-datail">
            <div>
              <div>
                <span>Native Name:</span> {country.nativeName}
              </div>
              <div>
                <span>Population:</span> {country.population}
              </div>
              <div>
                <span>Region:</span> {country.region}
              </div>
              <div>
                <span>Sub Region:</span> {country.subregion}
              </div>
              <div>
                <span>Capital:</span> {country.capital}
              </div>
            </div>
            <div>
              <div>
                <span>Top Level Domain:</span> {country.tld}
              </div>
              <div>
                <span>Currencies:</span> {country.currencies}
              </div>
              <div>
                <span>Languages:</span> {country.languages}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="detail-border">
          <span>Border Countries: </span>
          <div className="detail-country-border">
            {country.borders
              ? country.borders.map((ele) => {
                  return (
                    <button
                      key={ele}
                      onClick={() => {
                        navigate(`/country/${ele}`);
                        setLoader(true);
                      }}
                    >
                      {ele}
                    </button>
                  );
                })
              : null}
          </div>
        </div>
    </div>
  );
}

export default DetailPage;
