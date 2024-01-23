import '../styles/item-details.css'

const PlanetDetails = ({ planet }) => {
  return (
    <div className="details">
      {planet ? (
        <>
          <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.id + 1}.jpg`} alt="planet" className='item-img' />
          <div className="item-info">
            <span>{planet.name}</span>
            <span>Population: {planet.population}</span>
            <span>Rotation period: {planet.rotation_period}</span>
            <span>Diameter: {planet.diameter}</span>
          </div></>
      ) : <span>Select a planet from list</span>}
    </div>
  )
}

export default PlanetDetails