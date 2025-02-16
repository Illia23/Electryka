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
          <div className={css.containerBlog}>
              <h3 className={css.Blog}>Blog</h3>
              <p className={css.textBlogx}>Tips, guides, and updates on modern electrical solutions for your home or business.</p>
              <div className={css.social}>
                  <a  href="">
                     <svg className={css.networks} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
  <path d="M22.676 0h-21.352c-.732 0-1.324.592-1.324 1.324v21.352c0 .732.592 1.324 1.324 1.324h11.497v-9.284h-3.125v-3.622h3.125v-2.671c0-3.097 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.243l-1.918.001c-1.504 0-1.795.714-1.795 1.761v2.311h3.587l-.467 3.622h-3.12v9.284h6.116c.732 0 1.324-.592 1.324-1.324v-21.352c0-.732-.592-1.324-1.324-1.324z"/>
</svg>
                  </a>
                  <a href="">
                     <svg className={css.networks} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.452.067-2.916.38-4.021 1.486-1.105 1.105-1.419 2.569-1.486 4.021-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.067 1.452.38 2.916 1.486 4.021 1.105 1.105 2.569 1.419 4.021 1.486 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.452-.067 2.916-.38 4.021-1.486 1.105-1.105 1.419-2.569 1.486-4.021.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.067-1.452-.38-2.916-1.486-4.021-1.105-1.105-2.569-1.419-4.021-1.486-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.293 0-4.162-1.869-4.162-4.162s1.869-4.162 4.162-4.162 4.162 1.869 4.162 4.162-1.869 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
</svg>
                  </a>
                  <a href="">
                    <svg className={css.networks} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
  <path d="M22.23 0h-20.46c-.974 0-1.77.796-1.77 1.77v20.46c0 .974.796 1.77 1.77 1.77h20.46c.974 0 1.77-.796 1.77-1.77v-20.46c0-.974-.796-1.77-1.77-1.77zm-15.538 20.452h-3.415v-11.632h3.415v11.632zm-1.708-13.209c-1.093 0-1.978-.885-1.978-1.978s.885-1.978 1.978-1.978 1.978.885 1.978 1.978-.885 1.978-1.978 1.978zm13.616 13.209h-3.415v-5.597c0-1.336-.026-3.053-1.861-3.053-1.863 0-2.148 1.453-2.148 2.954v5.696h-3.415v-11.632h3.281v1.589h.047c.457-.868 1.574-1.782 3.24-1.782 3.461 0 4.101 2.278 4.101 5.238v6.587z"/>
</svg>
                  </a>
            </div>
      </div>
        <div className={css.Contact}>
            <p className={css.Text}>📞 Phone: +48 881 856 801</p>
            <p className={css.Text}>✉️ Email: andrii.arutiunian@gmail.com</p>
            <p className={css.Text}>⏰ Working Hours: Mon-Fri, 7:00  - 17:00 </p>
          </div>
    </div>
  )
}

export default Footer