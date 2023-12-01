const getResource = async (url) => {
  const apiBase = "https://swapi.dev/api";
  const res = await fetch(`${apiBase}${url}`);
  const body = await res.json();
  return body;
};

const getAllPeople = async (setData) => {
  const res = await getResource("/people/");
  const peopleWithID = res.results.map((el, id) => {
    return {
      ...el,
      id
    }
  })
  setData(peopleWithID);
};

const getPerson = async (setData, id) => {
  const res = await getResource(`/people/${id}/`);
  setData(res);
};

const getAllPlanets = async (setData) => {
  const res = await getResource("/planets/");
  setData(res.results);
};

const getPlanet = async (setData, id) => {
  const res = await getResource(`/planets/${id}/`);
  const planet = {
    name: res.name,
    population: res.population,
    rotationPeriod: res.rotation_period,
    diameter: res.diameter,
    id
  }
  setData(planet);
};

const getAllStarships = async (setData) => {
  const res = await getResource("/starships/");
  setData(res.results);
};

const getStarship = async (setData, id) => {
  const res = await getResource(`/starships/${id}/`);
  setData(res);
};

const API = {
  getAllPeople,
  getPerson,
  getAllPlanets,
  getPlanet,
  getAllStarships,
  getStarship,
};

export default API;
