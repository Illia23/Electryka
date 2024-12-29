import css from './Home.module.css'
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
              <img src="../../../images/building-icon.png" alt="" />
              <h3></h3>
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <h3></h3>
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <h3></h3>
              <p></p>
            </li>
            <li>
              <img src="" alt="" />
              <h3></h3>
              <p></p>
            </li>
         </ul>
        </div>
      </div>
    </>
      
  )
}

export default Home