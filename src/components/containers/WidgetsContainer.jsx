import { useTranslation } from "react-i18next";
import TourCard from "../cards/TourCard";

function WidgetsContainer() {
  const { t } = useTranslation();

  return (
    <div className="flex h-fit flex-col items-center justify-center gap-6 py-10 pr-7 pl-5 md:gap-12">
      <h2 className="text-center text-4xl font-bold md:text-[50px]">
        {t("widgetContainer.title")}
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 p-4">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </div>
  );
}

export default WidgetsContainer;
