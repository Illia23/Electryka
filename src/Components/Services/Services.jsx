import css from './Services.module.css';
import buildingIcon from '../../../images/building-icon.png';
import flashIcon from '../../../images/flash-icon.png';
import bulbIcon from '../../../images/bulb-icon.png';
import industrialIcon from '../../../images/industrial-icon.png';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { name: t("Installation and replacement of sockets"), price: "15–25 PLN" },
    { name: t("Installation and replacement of switches"), price: "20–30 PLN" },
    { name: t("Mounting and connecting lighting fixtures"), price: "95–200 PLN" },
    { name: t("Laying electrical wiring"), price: "65-100 PLN/punkt" },
    { name: t("Installation of distribution boxes"), price: "150–300 PLN" },
    { name: t("Connecting and configuring doorbells and intercoms"), price: "130–266 PLN" },
    { name: t("Installation and replacement of circuit breakers"), price: "13–20 PLN" },
    { name: t("Electrical panel installation"), price: "150–300 PLN" },
    { name: t("Connection of voltage stabilizers"), price: "50–100 PLN" },
    { name: t("Installation of voltage relays"), price: "50–100 PLN" },
    { name: t("Connecting generators and UPS"), price: "100–200 PLN" },
    { name: t("Connecting electric boilers and water heaters"), price: "100–200 PLN" },
    { name: t("Installation and connection of air conditioners"), price: "500–1000 PLN" },
    { name: t("Installation of open and concealed wiring"), price: "65-100 PLN/punkt"  },
    { name: t("Laying cables in corrugated pipes or cable ducts"), price: "65-100 PLN/punkt"  },
    { name: t("Laying power cables to houses or apartments"), price: "65-100 PLN/punkt"  },
    { name: t("Troubleshooting and fixing wiring issues"), price: "100–200 PLN" },
  ];

  const panelServices = [
    { name: t("Installation and replacement of circuit breakers"), price: "13–20 PLN" },
    { name: t("Electrical panel installation"), price: "150–300 PLN" },
    { name: t("Connection of voltage stabilizers"), price: "50–100 PLN" },
    { name: t("Installation of voltage relays"), price: "50–100 PLN" },
    { name: t("Connecting generators and UPS"), price: "100–200 PLN" },
    { name: t("Connecting electric boilers and water heaters"), price: "100–200 PLN" },
    { name: t("Installation and connection of air conditioners"), price: "500–1000 PLN" },
  ];

  const cableServices = [
    { name: t("Installation of open and concealed wiring"), price: "65-100 PLN/punkt"  },
    { name: t("Laying cables in corrugated pipes or cable ducts"), price: "65-100 PLN/punkt"  },
    { name: t("Laying power cables to houses or apartments"), price: "65-100 PLN/punkt"  },
    { name: t("Troubleshooting and fixing wiring issues"), price: "100–200 PLN" },
  ];

  return (
    <div className={css.secondContainer}>
      <h2 className={css.titleServices}>{t("Our Services")}</h2>
      <div className={css.servicesContainer}>
        <ul className={css.listServices}>
          <li className={css.itemServices}>
            <img className={css.imageItem} src={buildingIcon} alt="" />
            <h3 className={css.titleItema}>{t("Residential Services")}</h3>
            <p className={css.textItem}>{t("Residential Services Description")}</p>
          </li>
          <li className={css.itemServices2}>
            <img className={css.imageItem} src={flashIcon} alt="" />
            <h3 className={css.titleItema}>{t("Commercial Services")}</h3>
            <p className={css.textItem}>{t("Commercial Services Description")}</p>
          </li>
          <li className={css.itemServices}>
            <img className={css.imageItem} src={bulbIcon} alt="" />
            <h3 className={css.titleItema}>{t("Electrical Services")}</h3>
            <p className={css.textItem}>{t("Electrical Services Description")}</p>
          </li>
          <li className={css.itemServices}>
            <img className={css.imageItem} src={industrialIcon} alt="" />
            <h3 className={css.titleItema}>{t("Industrial Services")}</h3>
            <p className={css.textItem}>{t("Industrial Services Description")}</p>
          </li>
        </ul>
      </div>
      <div className={css.container}>
        <table className={css.table}>
          <thead>
            <tr>
              <th className={css.th}>{t("Service Name")}</th>
              <th className={css.th}>{t("Price")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={css.td}>{t("Express Electrical Services")}</td>
              <td className={css.td}>{t("Price is agreed on-site")}</td>
            </tr>
          </tbody>
        </table>

        <h2>{t("Basic Electrical Installation Works")}</h2>
        <table className={css.table}>
          <thead>
            <tr>
              <th className={css.th}>{t("Service Name")}</th>
              <th className={css.th}>{t("Price")}</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className={css.tr}>
                <td className={css.td}>{service.name}</td>
                <td className={css.td}>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{t("Panel Works and Electrical Equipment Connection")}</h2>
        <table className={css.table}>
          <thead>
            <tr>
              <th className={css.th}>{t("Service Name")}</th>
              <th className={css.th}>{t("Price")}</th>
            </tr>
          </thead>
          <tbody>
            {panelServices.map((service, index) => (
              <tr key={index} className={css.tr}>
                <td className={css.td}>{service.name}</td>
                <td className={css.td}>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{t("Cable Systems Installation and Repair")}</h2>
        <table className={css.table}>
          <thead>
            <tr>
              <th className={css.th}>{t("Service Name")}</th>
              <th className={css.th}>{t("Price")}</th>
            </tr>
          </thead>
          <tbody>
            {cableServices.map((service, index) => (
              <tr key={index} className={css.tr}>
                <td className={css.td}>{service.name}</td>
                <td className={css.td}>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
