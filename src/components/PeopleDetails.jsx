import '../styles/people-details.css'

const PeopleDetails = ( {...hero} ) => {

  const selectedHero = hero
  if (selectedHero.hero === null) {
    return (
      <div className="details">
      <span>Select a hero from list</span>
      </div>
    )
  }
  return (
    <div className="details">
      
      <img src={`https://starwars-visualguide.com/assets/img/characters/${selectedHero.hero.id + 1}.jpg`} alt="person" className='person-img'/>
      <div className="person-info">
        <span>{selectedHero.hero.name}</span>
        <span>Gender: {selectedHero.hero.gender}</span>
        <span>Birth year: {selectedHero.hero.birth_year}</span>
        <span>Eye Color: {selectedHero.hero.eye_color}</span>
      </div>
    </div>
  )
}

export default PeopleDetails