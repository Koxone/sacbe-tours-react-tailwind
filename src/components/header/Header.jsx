import { useTranslation } from "react-i18next";
import LanguageButton from "../buttons/LanguageButton";
import WhatsappButton from "../buttons/WhatsappButton";
import { Link, useLocation } from "react-router-dom";
import HeaderMenu from "../dropdown/HeaderMenu";
import { useState, useEffect } from "react";

function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const linkClass = (path) =>
    `relative md:text-2xl text-base font-medium text-white px-4 py-2 ${
      location.pathname === path || location.pathname.startsWith(`${path}/`)
        ? "before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white"
        : ""
    }`;

  return (
    <header className="grid w-full grid-cols-[auto_1fr_auto] items-center border-b border-blue-100 bg-[#15445e] p-2 px-4 pb-4 md:grid-cols-[1fr_auto_1fr] md:px-10 md:py-5">
      <Link
        to="/"
        className="mr-auto max-w-[48px] cursor-pointer rounded-full md:block"
      >
        <img
          className="rounded-full object-contain"
          src="/assets/logo.png"
          alt="Sacbe Logo Icon"
        />
      </Link>

      {/* Links Container */}
      <div
        className={`${
          isMobile
            ? "absolute top-17 left-0 z-50 flex w-full justify-center bg-[#15445e] transition-all duration-300"
            : "mx-auto flex max-w-[800px] justify-center md:gap-10"
        } ${isMobile && (menuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden")}`}
      >
        <div className={`${isMobile ? "flex items-center gap-4" : "flex"}`}>
          <Link
            className={linkClass("/")}
            to="/"
            onClick={() => isMobile && setMenuOpen(false)}
          >
            {t("menu.home")}
          </Link>
          <HeaderMenu
            className={linkClass("/tours")}
            closeMobileMenu={() => isMobile && setMenuOpen(false)}
          />
          <Link
            className={linkClass("/contact")}
            to="/contact"
            onClick={() => isMobile && setMenuOpen(false)}
          >
            {t("menu.contact")}
          </Link>
        </div>
      </div>

      <div className="flex w-fit items-center gap-4 justify-self-end">
        <WhatsappButton />
        <LanguageButton />
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="w-fit rounded border border-white p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src="/assets/menu.svg" alt="Menu Icon" className="h-6 w-6" />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
