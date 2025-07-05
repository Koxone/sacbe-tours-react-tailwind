import { useTranslation } from "react-i18next";
import LanguageButton from "../buttons/LanguageButton";
import WhatsappButton from "../buttons/WhatsappButton";
import { Link, useLocation } from "react-router-dom";
import HeaderMenu from "../dropdown/HeaderMenu";

function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const linkClass = (path) =>
    `relative md:text-2xl text-lg font-medium text-white px-4 py-2 ${
      location.pathname === path
        ? "before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white"
        : ""
    }`;

  return (
    <header className="grid w-full grid-cols-2 items-center border-b-1 border-blue-100 bg-[#15445e] p-2 px-4 md:grid-cols-[1fr_auto_1fr] md:px-10 md:py-5">
      <Link
        to="/"
        className="mr-auto hidden max-w-[48px] cursor-pointer rounded-full md:block"
      >
        <img
          className="rounded-full object-contain"
          src="/assets/logo.png"
          alt="Sacbe Logo Icon"
        />
      </Link>
      <div className="mx-auto flex max-w-[800px] justify-center gap-10 text-black">
        <Link className={linkClass("/")} to="/">
          {t("menu.home")}
        </Link>
        <HeaderMenu className={linkClass("/tours")} />
        <Link className={linkClass("/contact")} to="/contact">
          {t("menu.contact")}
        </Link>
      </div>
      <div className="flex w-fit items-center gap-4 justify-self-end">
        <WhatsappButton />
        <LanguageButton />
      </div>
    </header>
  );
}

export default Header;
