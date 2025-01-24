import css from './Footer.module.css'
import { NavLink } from "react-router-dom";
import clsx from "clsx";
const buildClassLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active)
};
const Footer = () => {
  return (
      <div className={css.footer}>
          <div className={css.containerLinks}>
              <h3 className={css.links}>Quick Links</h3>
              <nav className={css.nav}>
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
          <div>
              <h3>Blog</h3>
              <p>cvxjvxccx</p>
              <ul>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
    </div>
  )
}

export default Footer