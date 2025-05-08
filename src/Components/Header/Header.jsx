import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import clsx from "clsx";
import logo from './logo.svg';
import { useTranslation } from "react-i18next";

const buildClassLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <img className={css.logo} src={logo} alt="VAD BUD Logo" style={{ width: "95px", height: "auto" }} />
        
        <button className={css.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={css.bar}></span>
          <span className={css.bar}></span>
          <span className={css.bar}></span>
        </button>

        <div className={clsx(css.navLinks, isMenuOpen && css.open)}>
          <NavLink to="/" className={buildClassLink} onClick={() => setIsMenuOpen(false)}>
            {t('Home')}
          </NavLink>
          <NavLink to="/about" className={buildClassLink} onClick={() => setIsMenuOpen(false)}>
            {t('About')}
          </NavLink>
          <NavLink to="/services" className={buildClassLink} onClick={() => setIsMenuOpen(false)}>
            {t('Services')}
          </NavLink>

          <div className={css.languageSwitcher}>
            <button className={css.languageButton} onClick={() => handleLanguageChange('en')}>
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" className={css.flag} />
            </button>
            <button className={css.languageButton} onClick={() => handleLanguageChange('uk')}>
              <img src="https://flagcdn.com/w40/ua.png" alt="UA" className={css.flag} />
            </button>
            <button className={css.languageButton} onClick={() => handleLanguageChange('pl')}>
              <img src="https://flagcdn.com/w40/pl.png" alt="PL" className={css.flag} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

