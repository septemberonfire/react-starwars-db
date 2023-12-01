import '../styles/header.css'

function Header() {
  return (
    <div className="header">
      <h3 className="headline">Star Wars DB</h3>
      <ul className="nav-bar">
        <li className="nav-bar-item">
          People
        </li>
        <li className="nav-bar-item">
          Planets
        </li>
        <li className="nav-bar-item">
          Starships
        </li>
      </ul>
    </div>
  )
}

export default Header