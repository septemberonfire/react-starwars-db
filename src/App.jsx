import API from "./services/swapi-service.js";
import { useEffect, useState } from "react";
import Header from './components/Header.jsx'
import RandomPlanet from "./components/RandomPlanet.jsx";
import ItemList from "./components/ItemList.jsx";
import PeopleDetails from "./components/PeopleDetails.jsx";
import './styles/app.css'

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getAllPlanets(setData);
  }, []);

  return (
    <>
    <div className="container">
      <Header />
      <RandomPlanet />
      <div className="main-wrap">

      <ItemList />
      </div>
    </div>
    </>
  );
}

export default App;
