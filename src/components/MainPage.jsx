import RandomPlanet from "./RandomPlanet"
import ItemList from "./ItemList.jsx"
import PeopleDetails from "./PeopleDetails.jsx";
import API from "../services/swapi-service.js";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    API.getAllPlanets(setData);
  }, []);

  const chooseYourHero = (value) => {
    setItem(value)
  }

  return (
    <>
      <RandomPlanet />
      <div className="main-wrap">
        <ItemList getData={API.getAllPeople} 
        chooseItem = {chooseYourHero}
        />
        <PeopleDetails 
        hero = {item}
        />

      </div>
    </>
  )
}

export default MainPage