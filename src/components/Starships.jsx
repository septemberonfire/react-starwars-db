import ItemList from "./ItemList.jsx";
import StarshipDetails from "./StarshipDetails.jsx";
import API from "../services/swapi-service.js";
import { useState } from "react";

const Starships = () => {

  const [item, setItem] = useState(null);

  const chooseYourStarship = (value) => {
    setItem(value)
  }

  return (
    <div className="main-wrap">
      <ItemList getData={API.getAllStarships}
        chooseItem={chooseYourStarship}
      />
      <StarshipDetails
        starship={item}
      />
    </div>
  )
}

export default Starships