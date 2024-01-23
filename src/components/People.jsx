import ItemList from "./ItemList.jsx";
import PeopleDetails from "./PeopleDetails.jsx";
import API from "../services/swapi-service.js";
import { useState } from "react";

const People = () => {

  const [item, setItem] = useState(null);

  const chooseYourHero = (value) => {
    setItem(value)
  }

  return (
    <div className="main-wrap">
      <ItemList getData={API.getAllPeople}
        chooseItem={chooseYourHero}
      />
      <PeopleDetails
        hero={item}
      />
    </div>
  )
}

export default People