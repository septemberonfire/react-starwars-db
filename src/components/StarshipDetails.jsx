import '../styles/item-details.css'

const StarshipDetails = ({ starship }) => {
  return (
    <div className="details">
      {starship ? (
        <>
          <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.id + 5}.jpg`} alt="starship" className='item-img' />
          <div className="item-info">
            <span>{starship.name}</span>
            <span>Cargo capacity: {starship.cargo_capacity}</span>
            <span>Passengers: {starship.passengers}</span>
            <span>Max speed: {starship.max_atmosphering_speed}</span>
          </div></>
      ) : <span>Select a starship from list</span>}
    </div>
  )
}

export default StarshipDetails