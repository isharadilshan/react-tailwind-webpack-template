import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEng from '../locales/en/translation.json';
import translationEs from '../locales/es/translation.json';

i18n.use(LanguageDetector).init({
  debug: true, // change this in production to false
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translations: translationEng,
    },
    es: {
      translations: translationEs,
    },
  },
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
