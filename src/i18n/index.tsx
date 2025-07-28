import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEN from './locales/en/translation.json'
import translationPT from './locales/pt/translation.json'

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
}

i18n
  .use(LanguageDetector) // detecta o idioma do navegador
  .use(initReactI18next) // conecta com o React
  .init({
    resources,
    fallbackLng: 'en', // idioma padrão
    interpolation: {
      escapeValue: false, // React já faz escaping
    },
  })
export default i18n
