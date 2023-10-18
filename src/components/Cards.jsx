import { useContext } from "react";
import Card from "./Card";
import { filterData } from "../assets/filterData";
import { StateContext } from "../context/ContextProvider";

function Cards() {
  const { data, region, subRegion, country, sort } = useContext(StateContext);

  let newData = filterData(data, region, subRegion, country, sort);

  return (
    <div className="cards">
      {newData.length ? (
        newData.map((element) => {
          return <Card key={element.name.common} country={[element]} />;
        })
      ) : (
        <h1 className="card-error">No such countries found</h1>
      )}
    </div>
  );
}

export default Cards;
