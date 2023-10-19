import { useContext, useEffect, useState } from "react";

import Searchbar from "./Searchbar";
import Loader from "./Loader";
import { StateContext } from "../context/ContextProvider";
import Cards from "./Cards";

function HomePage() {
  const { setData } = useContext(StateContext);

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

  return (
    <div>
      <Searchbar />
      <Cards />
    </div>
  );
}

export default HomePage;
