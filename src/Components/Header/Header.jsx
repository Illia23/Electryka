import { NavLink } from "react-router-dom";
import css from './Header.module.css'
import clsx from "clsx";
import logo from './logo.svg'
import { useTranslation } from "react-i18next";
const buildClassLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active)
};
const Header = () => {
  const {  i18n } = useTranslation();

  return (
    <div>
     <div>
      <button onClick={() => i18n.changeLanguage("ua")}>🇺🇦 Українська</button>
      <button onClick={() => i18n.changeLanguage("pl")}>🇵🇱 Polski</button>
      <button onClick={() => i18n.changeLanguage("en")}>En English</button>
    </div>
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
      </div>
  )
}

export default Header