import { useTranslation } from "react-i18next";
import css from './Home.module.css'
import buildingIcon from '../../../images/building-icon.png'
import flashIcon from '../../../images/flash-icon.png'
import bulbIcon from '../../../images/bulb-icon.png'
import industrialIcon from '../../../images/industrial-icon.png'
import about from '../../../images/about-img.png'
import workers from '../../../images/client-img.png'

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={css.firstContainer}>
        <h1 className={css.h1}>{t('home.title')}</h1>
        <h2 className={css.VadBud}>{t('home.company')}</h2>
        <p className={css.textFirst}>{t('home.description')}</p>
      </div>

      <div className={css.secondContainer}>
        <h2 className={css.titleServices}>{t('home.services.title')}</h2>
        <div className={css.servicesContainer}>
          <ul className={css.listServices}>
            <li className={css.itemServices}>
              <img className={css.imageItem} src={buildingIcon} alt="" />
              <h3 className={css.titleItema}>{t('home.services.residential.title')}</h3>
              <p className={css.textItem}>{t('home.services.residential.description')}</p>
            </li>
            <li className={css.itemServices2}>
              <img className={css.imageItem} src={flashIcon} alt="" />
              <h3 className={css.titleItema}>{t('home.services.commercial.title')}</h3>
              <p className={css.textItem}>{t('home.services.commercial.description')}</p>
            </li>
            <li className={css.itemServices}>
              <img className={css.imageItem} src={bulbIcon} alt="" />
              <h3 className={css.titleItema}>{t('home.services.electrical.title')}</h3>
              <p className={css.textItem}>{t('home.services.electrical.description')}</p>
            </li>
            <li className={css.itemServices}>
              <img className={css.imageItem} src={industrialIcon} alt="" />
              <h3 className={css.titleItema}>{t('home.services.industrial.title')}</h3>
              <p className={css.textItem}>{t('home.services.industrial.description')}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.AboutUs}>
        <h2 className={css.titleAbout}>{t('home.about.title')}</h2>
        <div className={css.containerAbout}>
          <p className={css.textAbout}>{t('home.about.description')}</p>
          <img className={css.imageLigth} src={about} alt="light" />
        </div>
      </div>

      <div className={css.containerCustomers}>
        <h2 className={css.titleCustomers}>{t('home.customers.title')}</h2>
        <p className={css.textCustomers}>{t('home.customers.subtitle')}</p>
        <div className={css.containerWorkers}>
          <div className={css.workers}>
            <img src={workers} alt="" />
            <h3>Illia Pryimak</h3>
            <p>{t('home.customers.illia')}</p>
          </div>
          <div className={css.workers}>
            <img src={workers} alt="" />
            <h3>Andrii Arutunian</h3>
            <p>{t('home.customers.andrii')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
