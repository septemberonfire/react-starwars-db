import API from "./services/swapi-service.js";
import { useEffect, useState } from "react";
import Header from './components/Header.jsx'
import RandomPlanet from "./components/RandomPlanet.jsx";
import './styles/app.css'


function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    API.getAllPlanets(setData);
  }, []);
  return (
    <>
      <Header />
      <RandomPlanet />
    </>
  );
}

export default App;
