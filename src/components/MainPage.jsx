import RandomPlanet from "./RandomPlanet"
import ItemList from "./ItemList.jsx"
import API from "../services/swapi-service.js";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getAllPlanets(setData);
  }, []);

  return (
    <>
      <RandomPlanet />
      <div className="main-wrap">
        <ItemList />
      </div>
    </>
  )
}

export default MainPage