import { createContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import Loader from "./components/Loader";
import { filterData } from "./assets/filterData";

export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [sort, setSort] = useState("");
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        setError(false);
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  if (error) {
    return <h1 className="error">Not Found...</h1>;
  }

  if (loader) {
    return <Loader />;
  }

  let newData = filterData(data, region, subRegion, country, sort);

  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      <div
        className={(darkMode ? "main-container-dark " : "") + "main-container"}
      >
        <Navbar />
        <Searchbar
          data={data}
          setCountry={setCountry}
          setRegion={setRegion}
          region={region}
          setSubRegion={setSubRegion}
          setSort={setSort}
        />
        <div className="cards">
          {newData.length ? (
            newData.map((element) => {
              return <Card key={element.name.common} country={[element]} />;
            })
          ) : (
            <h1 className="card-error">No such countries found</h1>
          )}
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
