import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Локалізації для кожної мови
import en from './locales/en.json';
import uk from './locales/uk.json';
import pl from './locales/pl.json';

// Ініціалізація i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      pl: { translation: pl }
    },
    lng: "uk", // Мова за замовчуванням
    fallbackLng: "en", // Якщо переклад не знайдений
    interpolation: {
      escapeValue: false // Не потрібно екранувати HTML
    }
  });

export default i18n;
