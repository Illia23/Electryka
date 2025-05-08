import about from '../../../images/about-img.png';
import css from './About.module.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={css.AboutUs}>
      <h2 className={css.titleAbout}>{t('about.title')}</h2>
      <div className={css.containerAbout}>
        <p className={css.textAbout}>{t('about.description')}</p>
        <img className={css.imageLigth} src={about} alt="light" />
      </div>
      <div className={css.Contact}>
        <h2 className={css.Title}>{t('about.contact.title')}</h2>
        <p className={css.Text}>📞 {t('about.contact.phone')}</p>
        <p className={css.Text}>✉️ {t('about.contact.email')}</p>
        <p className={css.Text}>⏰ {t('about.contact.hours')}</p>
      </div>
    </div>
  );
};

export default About;
