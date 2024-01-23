import { useEffect, useState } from "react";
import Loader from "./Loader";
import "../styles/item-list.css";

const ItemList = ({ getData, chooseItem }) => {
  const [list, setList] = useState(null);
  const [hero, setHero] = useState(null);

  useEffect(() => {
    getData(setList);
  }, []);

  const renderItems = (arr) => {
    if (list !== null) {
      return arr.map(({ id, name }) => {
        return (
          <li
            className="item"
            onClick={() => {
              const item = arr.find((el) => el.id === id);
              setHero(item);
              chooseItem(item);
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
    </>
  );
};

export default ItemList;
