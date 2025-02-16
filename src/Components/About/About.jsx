import about from '../../../images/about-img.png'
import css from './About.module.css'
const About = () => {
   return (
     <div className={css.AboutUs}>
          <h2 className={css.titleAbout}>About Our electricity Company</h2>
          <div className={css.containerAbout}>
              <p className={css.textAbout}>We are dedicated to providing reliable and sustainable energy solutions tailored to your needs. With a commitment to safety, quality, and efficiency, we strive to power homes and businesses with innovation and care.</p>
            <img className={css.imageLigth} src={about} alt="ligth" />
       </div>
         <div className={css.Contact}>
      <h2 className={css.Title}>Contact Information</h2>
      <p className={css.Text}>📞 Phone: +48 881 856 801</p>
      <p className={css.Text}>✉️ Email: andrii.arutiunian@gmail.com</p>
      <p className={css.Text}>⏰ Working Hours: Mon-Fri, 7:00  - 17:00 </p>
    </div>
        </div>
  )


};
export default About
  
 