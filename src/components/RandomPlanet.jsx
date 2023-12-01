import "../styles/random-planet.css";
import API from "../services/swapi-service";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const RandomPlanet = () => {
  const [planet, setPlanet] = useState({
    name: "",
    population: "",
    rotationPeriod: "",
    diameter: "",
    id: "",
  });

  useEffect(() => {
    const id = 1 + Math.floor(Math.random() * 11);
    API.getPlanet(setPlanet, id);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = 1 + Math.floor(Math.random() * 11);

      API.getPlanet(setPlanet, id);
    }, 10000);
    return () => clearInterval(interval);
  }, [planet]);

  return (
    <div className="random-planet">
      {planet.id === "" ? (
        <Loader />
      ) : (
        <>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
            alt="planet"
            className="planet-img"
          />
          <div className="planet-info">
            <h3>{planet.name}</h3>
            <p>Population: {planet.population}</p>
            <p>Rotation Period: {planet.rotationPeriod}</p>
            <p>Diameter: {planet.diameter}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default RandomPlanet;
