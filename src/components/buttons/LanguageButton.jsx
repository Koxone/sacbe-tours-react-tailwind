import { useTranslation } from "react-i18next";
import { useProjectContext } from "../../context/ProjectContext";

function LanguageButton() {
  const { i18n, t } = useTranslation();
  const { setLanguage } = useProjectContext();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex w-fit cursor-pointer items-center justify-center gap-1 rounded-sm border bg-[#297da9] p-1 text-center text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 hover:bg-[#004165] md:h-10 md:w-fit md:px-4 md:text-sm md:font-semibold md:tracking-normal"
    >
      {t("languageButton.button")}
      <img
        className="w-[18px] md:w-[20px]"
        src={i18n.language === "es" ? "/assets/mexico.png" : "/assets/usa.png"}
        alt={i18n.language === "es" ? "Bandera de México" : "USA Flag"}
      />
    </button>
  );
}

export default LanguageButton;
