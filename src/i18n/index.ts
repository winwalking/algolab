import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./en-US/index";
import jaJP from "./ja-JP/index";

i18n
  .use(initReactI18next) // React와 연결
  .use(LanguageDetector) // 브라우저 언어 감지
  .init({
    resources: {
      "en-US": { translation: enUS },
      "ja-JP": { translation: jaJP },
    },
    lng: "ja-JP", // 기본 언어 (브라우저 감지를 사용할 경우 자동 설정됨)
    fallbackLng: "en-US", // 기본적으로 영어를 사용
    interpolation: { escapeValue: false },
  });

export default i18n;
