import { useTranslation } from "react-i18next";
import LanguageButton from "../buttons/LanguageButton";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="grid w-full grid-cols-2 items-center p-2 md:grid-cols-[1fr_auto_1fr] md:px-10 md:py-5">
      <button className="mr-auto hidden max-w-[48px] cursor-pointer rounded-full md:block">
        <img
          className="rounded-full object-contain"
          src="/assets/logo.png"
          alt="Sacbe Logo Icon"
        />
      </button>
      <h1 className="w-fit justify-self-center text-[23px] font-bold whitespace-nowrap md:text-[32px] lg:text-5xl">
        Cancun Tours
      </h1>
      <div className="flex w-fit items-center gap-4 justify-self-end">
        <button className="btn-pulse flex cursor-pointer items-center justify-center rounded-sm bg-[#297da9] p-1 text-sm whitespace-nowrap text-white transition-all duration-300 ease-in-out hover:bg-[#004165] md:w-[110px] md:rounded-4xl md:px-4 md:py-2 md:text-base md:whitespace-nowrap lg:w-[160px] xl:w-[200px] xl:text-2xl">
          {t("header.bookButton")}
        </button>
        <LanguageButton />
      </div>
    </header>
  );
}

export default Header;
