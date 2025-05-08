import css from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const buildClassLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={css.footer}>
      <div className={css.containerLinks}>
        <h3 className={css.links}>{t('footer.quickLinks')}</h3>
        <nav className={css.nav}>
          <NavLink to="/" className={buildClassLink}>
            {t('footer.home')}
          </NavLink>
          <NavLink to="/about" className={buildClassLink}>
            {t('footer.about')}
          </NavLink>
          <NavLink to="/services" className={buildClassLink}>
            {t('footer.services')}
          </NavLink>
        </nav>
      </div>

      <div className={css.containerBlog}>
        <h3 className={css.Blog}>{t('footer.blog')}</h3>
        <p className={css.textBlogx}>{t('footer.blogDescription')}</p>
        <div className={css.social}>
          <a href="">
            <svg className={css.networks} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
              <path d="M22.676 0h-21.352c..."/>
            </svg>
          </a>
          <a href="">
            <svg className={css.networks} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.163c..."/>
            </svg>
          </a>
          <a href="">
            <svg className={css.networks} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
              <path d="M22.23 0h..."/>
            </svg>
          </a>
        </div>
      </div>

      <div className={css.Contact}>
        <p className={css.Text}>📞 {t('footer.phone')}: +48 881 856 801</p>
        <p className={css.Text}>✉️ {t('footer.email')}: andrii.arutiunian@gmail.com</p>
        <p className={css.Text}>⏰ {t('footer.workingHours')}: Mon-Fri, 7:00 - 17:00</p>
      </div>
    </div>
  );
};

export default Footer;
