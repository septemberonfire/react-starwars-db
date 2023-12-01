import { useEffect, useState } from 'react'
import API from '../services/swapi-service'
import Loader from './Loader'
import '../styles/item-list.css'

const ItemList = () => {

  const [list, setList] = useState(null)

  useEffect(() => {
    API.getAllPeople(setList)
  }, [])

  const renderItems = (arr) => {
    if (list !== null) {

      return arr.map(({ id, name }) => {
        return (
          <li className="item"
            key={id}
          >{name}</li>
        )
      })
    }
  }

  const items = renderItems(list)

  return (
    <div className="item-list-wrap">
      <ul className="item-list">
        {/* <li className="item">qwerty</li>
        <li className="item">123456</li>
        <li className="item">qwe123qwe</li> */}
        {list === null ? <Loader /> : items}
      </ul>
    </div>
  )
}

export default ItemList