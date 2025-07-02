import { useTranslation } from "react-i18next";
import LanguageButton from "../buttons/LanguageButton";
import WhatsappButton from "../buttons/WhatsappButton";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="grid w-full grid-cols-2 items-center p-2 px-4 md:grid-cols-[1fr_auto_1fr] md:px-10 md:py-5">
      <button className="mr-auto hidden max-w-[48px] cursor-pointer rounded-full md:block">
        <img
          className="rounded-full object-contain"
          src="/assets/logo.png"
          alt="Sacbe Logo Icon"
        />
      </button>
      <h1 className="w-fit justify-self-center text-[28px] font-bold whitespace-nowrap md:text-[32px] lg:text-5xl">
        Cancun Tours
      </h1>
      <div className="flex w-fit items-center gap-4 justify-self-end">
        <WhatsappButton />
        <LanguageButton />
      </div>
    </header>
  );
}

export default Header;
