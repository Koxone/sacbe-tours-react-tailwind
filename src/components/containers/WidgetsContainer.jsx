import { useTranslation } from "react-i18next";
import TourCard from "../cards/TourCard";

function WidgetsContainer() {
  const { i18n, t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-12 overflow-hidden p-10">
      <h2 className="text-[50px] font-bold">{t("widgetContainer.title")}</h2>
      <div className="flex w-full items-center justify-center gap-4 p-4">
        <TourCard />
        <TourCard />
      </div>
    </div>
  );
}

export default WidgetsContainer;
