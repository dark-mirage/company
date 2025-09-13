"use client";

import { useTranslation } from "react-i18next";

export default function LanguagesSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage("ru")}
        className={`${i18n.language === "ru" ? "font-bold text-blue-600" : "text-gray-600"}`}
      >
        RU
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`${i18n.language === "en" ? "font-bold text-blue-600" : "text-gray-600"}`}
      >
        EN
      </button>
    </div>
  );
}
