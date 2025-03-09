import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our electrical services",
          contact: "Contact Us",
          about: "About Us",
        },
      },
      ua: {
        translation: {
          welcome: "Ласкаво просимо до наших електричних послуг",
          contact: "Зв'яжіться з нами",
          about: "Про нас",
        },
      },
      pl: {
        translation: {
          welcome: "Witamy w naszych usługach elektrycznych",
          contact: "Skontaktuj się z nami",
          about: "O nas",
        },
      },
    },
    fallbackLng: "en",
    detection: { order: ["navigator", "localStorage", "cookie"], caches: ["localStorage"] },
    interpolation: { escapeValue: false },
  });

export default i18n;
