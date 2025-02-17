import css from './Services.module.css'
import buildingIcon from '../../../images/building-icon.png'
import flashIcon from '../../../images/flash-icon.png'
import bulbIcon from '../../../images/bulb-icon.png'
import industrialIcon from '../../../images/industrial-icon.png'
const Services = () => {
  const services = [
  { name: "Installation and replacement of sockets", price: "" },
  { name: "Installation and replacement of switches", price: "" },
  { name: "Mounting and connecting lighting fixtures", price: "" },
  { name: "Laying electrical wiring", price: "" },
  { name: "Installation of distribution boxes", price: "" },
  { name: "Connecting and configuring doorbells and intercoms", price: "" },
  { name: "Installation and replacement of circuit breakers", price: "" },
  { name: "Electrical panel installation", price: "" },
  { name: "Connection of voltage stabilizers", price: "" },
  { name: "Installation of voltage relays", price: "" },
  { name: "Connecting generators and UPS (uninterruptible power supply)", price: "" },
  { name: "Connecting electric boilers and water heaters", price: "" },
  { name: "Installation and connection of air conditioners", price: "" },
  { name: "Installation of open and concealed wiring", price: "" },
  { name: "Laying cables in corrugated pipes or cable ducts", price: "" },
  { name: "Laying power cables to houses or apartments", price: "" },
  { name: "Troubleshooting and fixing wiring breaks or short circuits", price: "" },
  ];
  
  const panelServices = [
  { name: "Installation and replacement of circuit breakers", price: "" },
  { name: "Electrical panel installation", price: "" },
  { name: "Connection of voltage stabilizers", price: "" },
  { name: "Installation of voltage relays", price: "" },
  { name: "Connecting generators and UPS (uninterruptible power supply)", price: "" },
  { name: "Connecting electric boilers and water heaters", price: "" },
  { name: "Installation and connection of air conditioners", price: "" },
  ];
  
  const cableServices = [
  { name: "Installation of open and concealed wiring", price: "" },
  { name: "Laying cables in corrugated pipes or cable ducts", price: "" },
  { name: "Laying power cables to houses or apartments", price: "" },
  { name: "Troubleshooting and fixing wiring breaks or short circuits", price: "" },
];
  return (
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
      <div className={css.container}>
         <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Service Name</th>
          <th className={css.th}>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={css.td}>Express Electrical Services</td>
          <td className={css.td}>Price is agreed on-site</td>
        </tr>
      </tbody>
    </table>
        <h2>Basic Electrical Installation Works:</h2>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Service Name</th>
            <th className={css.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index} className={css.tr}>
              <td className={css.td}>{service.name}</td>
              <td className={css.td}>{service.price || "—"}</td>
            </tr>
          ))}
        </tbody>
        </table>

        <h2>Panel Works and Electrical Equipment Connection:</h2>

         <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Service Name</th>
            <th className={css.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {panelServices.map((service, index) => (
            <tr key={index} className={css.tr}>
              <td className={css.td}>{service.name}</td>
              <td className={css.td}>{service.price || "—"}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <h2>Cable Systems Installation and Repair:</h2>
        <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Service Name</th>
            <th className={css.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {cableServices.map((service, index) => (
            <tr key={index} className={css.tr}>
              <td className={css.td}>{service.name}</td>
              <td className={css.td}>{service.price || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      </div>
  )
};

export default Services;