import { useTranslation } from "react-i18next";
import TourCard from "../cards/TourCard";

function WidgetsContainer() {
  const { i18n, t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-6 overflow-hidden p-10 md:gap-12">
      <h2 className="text-4xl font-bold md:text-[50px]">
        {t("widgetContainer.title")}
      </h2>
      <div className="flex w-full items-center justify-center gap-4 p-4">
        <TourCard />
        <TourCard />
      </div>
    </div>
  );
}

export default WidgetsContainer;
