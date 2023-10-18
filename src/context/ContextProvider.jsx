import { createContext, useState } from "react";

export const StateContext=createContext();

function ContextProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const [data, setData] = useState();
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [subRegion, setSubRegion] = useState("");
    const [sort, setSort] = useState("");

  return (
    <StateContext.Provider value={{
        darkMode,
        setDarkMode,
        data,
        setData,
        country,
        setCountry,
        region,
        setRegion,
        subRegion,
        setSubRegion,
        sort,
        setSort
    }}>
      <div
        className={(darkMode ? "main-container-dark " : "") + "main-container"}
      >
        {children}
      </div>
    </StateContext.Provider>
  )
}


export default ContextProvider