import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
