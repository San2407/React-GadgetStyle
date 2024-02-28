import CartWidget from "../common/CartWidget";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../public/logo.svg";
export default function Navbar() {
  return (
    <>
      <nav className="menu">
        <Link to="/">
          <img className="logo" src={logo} alt="logo de gadgetstyle" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/Celulares">Celulares</Link>
          </li>
          <li>
            <Link to="/category/Fundas">Fundas</Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
      <Outlet />
    </>
  );
}
