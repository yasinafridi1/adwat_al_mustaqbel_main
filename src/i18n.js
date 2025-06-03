import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // load JSON files from /public/locales/{lng}/{ns}.json
  .use(LanguageDetector) // looks at localStorage, navigator, html lang…
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    debug: import.meta.env.DEV,
    interpolation: { escapeValue: false },
    detection: { order: ["localStorage", "htmlTag", "navigator"] },
  });

export default i18n;
