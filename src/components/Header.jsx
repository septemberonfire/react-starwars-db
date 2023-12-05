import '../styles/header.css'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()
  const location = useLocation()

  const routes = [
    {
      pathname: '/people',
      name: 'People'
    },
    {
      pathname: '/planets',
      name: 'Planets'
    },
    {
      pathname: '/starships',
      name: 'Starships'
    },
  ]


  return (
    <div className="header">
      <h3 className="headline" onClick={() => navigate("/")}>Star Wars DB</h3>
      <ul className="nav-bar">
        {routes.map((route) => {
          return (
            <li className={`nav-bar-item ${location.pathname === route.pathname && 'active'}`} key={route.pathname} onClick={() => navigate(route.pathname)}>
              {route.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Header