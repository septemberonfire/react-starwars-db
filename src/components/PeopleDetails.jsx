import '../styles/people-details.css'

const PeopleDetails = ({ hero }) => {
  return (
    <div className="details">
      {hero ? (
        <>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${hero.id + 1}.jpg`} alt="person" className='person-img' />
          <div className="person-info">
            <span>{hero.name}</span>
            <span>Gender: {hero.gender}</span>
            <span>Birth year: {hero.birth_year}</span>
            <span>Eye Color: {hero.eye_color}</span>
          </div></>
      ) : <span>Select a hero from list</span>}
    </div>
  )
}

export default PeopleDetails