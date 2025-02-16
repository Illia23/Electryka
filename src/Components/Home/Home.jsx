import css from './Home.module.css'
import buildingIcon from '../../../images/building-icon.png'
import flashIcon from '../../../images/flash-icon.png'
import bulbIcon from '../../../images/bulb-icon.png'
import industrialIcon from '../../../images/industrial-icon.png'
import about from '../../../images/about-img.png'
import workers from '../../../images/client-img.png'
const Home = () => {
  return (
    <>
    <div className={css.firstContainer}>
      <h1 className={css.h1}> Electricity Service</h1>
      <h2 className={css.VadBud}>VAD-BUD</h2>
      <p className={css.textFirst}>We provide top-notch electrical services tailored to meet residential, commercial, and industrial needs. Our team of certified electricians ensures safety, efficiency, and satisfaction with every project.</p>
    </div>
    <div className={css.secondContainer}>
        <h2 className={css.titleServices}>Our Services</h2>
        <div className={css.servicesContainer}>
          <ul className={css.listServices}>
            <li className={css.itemServices}>
              <img className={css.imageItem} src={buildingIcon} alt="" />
              <h3 className={css.titleItema}>Residential Services</h3>
              <p className={css.textItem}>Providing reliable and professional electrical solutions tailored to meet the unique needs of your home</p>
            </li>
            <li className={css.itemServices2}>
              <img className={css.imageItem} src={flashIcon} alt="" />
              <h3 className={css.titleItema}>Commercial Services</h3>
              <p className={css.textItem}>Delivering efficient and customized electrical services to power your business operations</p>
            </li>
            <li className={css.itemServices}>
              <img className={css.imageItem} src={bulbIcon} alt="" />
              <h3 className={css.titleItema}> Electrical Services</h3>
              <p className={css.textItem}>Offering comprehensive electrical solutions to ensure safety, reliability, and energy efficiency</p>
            </li>
            <li className={css.itemServices}>
              <img className={css.imageItem} src={industrialIcon} alt="" />
              <h3 className={css.titleItema}> Industrial Services </h3>
              <p className={css.textItem}>Providing advanced electrical services designed to support large-scale industrial operations</p>
            </li>
          </ul>
      </div>
        </div>
        <div className={css.AboutUs}>
          <h2 className={css.titleAbout}>About Our electricity Company</h2>
          <div className={css.containerAbout}>
              <p className={css.textAbout}>We are dedicated to providing reliable and sustainable energy solutions tailored to your needs. With a commitment to safety, quality, and efficiency, we strive to power homes and businesses with innovation and care.</p>
            <img className={css.imageLigth} src={about} alt="ligth" />
          </div>
        </div>
        <div className={css.containerCustomers}>
          <h2 className={css.titleCustomers}>Customers</h2>
          <p className={css.textCustomers}>The People Behind Our Success</p>
          <div className={css.containerWorkers}>
            <div className={css.workers}>
              <img src={workers} alt="" />
              <h3>Illia Pryimak</h3>
              <p>Looking for a reliable electrician? Illia Pryimak is an experienced professional who ensures high-quality and safe execution of all tasks.
                 </p>
            </div>
            <div className={css.workers}>
              <img src={workers} alt="" />
              <h3>Andrii Arutunian</h3>
              <p>Need a skilled electrician? Andrii Arutunian is a true expert who will complete all tasks quickly, reliably, and safely.</p>
            </div>
            
          </div>
          
        </div>
    </> 
      
  )
}

export default Home