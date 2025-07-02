import { useTranslation } from "react-i18next";
import LanguageButton from "../buttons/LanguageButton";
import { useProjectContext } from "../../context/ProjectContext";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="grid w-full grid-cols-[1fr_auto_1fr] items-center p-5">
      <button className="mr-auto max-w-[48px] cursor-pointer rounded-full">
        <img
          className="rounded-full object-contain"
          src="/assets/logo.png"
          alt="Sacbe Logo Icon"
        />
      </button>
      <h1 className="w-fit justify-self-center text-5xl font-bold">
        Cancun Tours
      </h1>
      <div className="flex w-fit items-center gap-4 justify-self-end">
        <button className="btn-pulse w-[168px] cursor-pointer rounded-4xl bg-[#297da9] px-4 py-2 text-xl text-white transition-all duration-300 ease-in-out hover:bg-[#004165]">
          {t("header.bookButton")}
        </button>
        <LanguageButton />
      </div>
    </header>
  );
}

export default Header;
