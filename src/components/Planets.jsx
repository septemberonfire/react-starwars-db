import ItemList from "./ItemList.jsx";
import PlanetDetails from "./PlanetDetails.jsx";
import API from "../services/swapi-service.js";
import { useState } from "react";

const Planets = () => {

  const [item, setItem] = useState(null);

  const chooseYourPlanet = (value) => {
    setItem(value)
  }

  return (
    <div className="main-wrap">
      <ItemList getData={API.getAllPlanets}
        chooseItem={chooseYourPlanet}
      />
      <PlanetDetails
        planet={item}
      />
    </div>
  )
}

export default Planets