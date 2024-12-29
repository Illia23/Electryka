import { NavLink } from "react-router-dom";
import css from './Header.module.css'
import clsx from "clsx";
import logo from'./logo.svg'
const buildClassLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active)
};
const Header = () => {
  return (
    <nav className={css.nav}>
      <img className={css.logo} src={logo} alt="VAD BUD Logo" style={{ width: "95px", height: "auto" }} />
        <NavLink to="/" className={buildClassLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildClassLink}>
          About
        </NavLink>
        <NavLink to="/services" className={buildClassLink}>
          Services
        </NavLink>
      </nav>
  )
}

export default Header