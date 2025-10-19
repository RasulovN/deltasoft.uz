import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import global_en from './translations/en/global.json';
import global_uz from './translations/uz/global.json';
import global_ru from './translations/ru/global.json';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already handles escaping
  lng: "en", // Default language
  resources: {
    en: { global: global_en },
    uz: { global: global_uz },
    ru: { global: global_ru },
  },
});

export default i18next;
