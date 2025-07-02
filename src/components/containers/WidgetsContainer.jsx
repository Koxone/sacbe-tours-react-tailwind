import TourCard from "../cards/TourCard";

function WidgetsContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 overflow-hidden p-10">
      <h2 className="text-[50px] font-bold">Discover our tours</h2>
      <div className="flex w-full items-center justify-center gap-4 p-4">
        <TourCard />
        <TourCard />
      </div>
    </div>
  );
}

export default WidgetsContainer;
