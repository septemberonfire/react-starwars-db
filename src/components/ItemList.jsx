import { useEffect, useState } from "react";
import API from "../services/swapi-service";
import Loader from "./Loader";
import PeopleDetails from "./PeopleDetails";
import "../styles/item-list.css";

const ItemList = () => {
  const [list, setList] = useState(null);
  const [hero, setHero] = useState(null);

  useEffect(() => {
    API.getAllPeople(setList);
  }, []);

  const renderItems = (arr) => {
    if (list !== null) {
      return arr.map(({ id, name }) => {
        return (
          <li
            className="item"
            onClick={() => {
              const person = arr.find((el) => el.id === id);
              setHero(person);
            }}
            key={id}
          >
            {name}
          </li>
        );
      });
    }
  };

  const items = renderItems(list);

  return (
    <>
    <div className="item-list-wrap">
      <ul className="item-list">{list === null ? <Loader /> : items}</ul>
    </div>
    <PeopleDetails hero={hero} />
    </>
  );
};

export default ItemList;
