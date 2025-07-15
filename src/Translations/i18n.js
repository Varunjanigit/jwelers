import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./en.json";
import ગુજરાતી from "./gu.json";
import हिन्दी from "./hi.json";

const storedLanguage = localStorage.getItem("language") || "English";

i18n.use(initReactI18next).init({
  resources: {
    English: { translation: English },
    ગુજરાતી: { translation: ગુજરાતી },
    हिन्दी: { translation: हिन्दी },
  },
  lng: storedLanguage,
  fallbackLng: "English",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
