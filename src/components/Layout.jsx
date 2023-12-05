import { Outlet } from "react-router-dom";
import Header from './Header'
import '../styles/app.css'

function Layout() {

  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
