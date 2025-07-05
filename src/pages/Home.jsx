import MainBanner from "../components/banner/MainBanner";
import AboutUsContainer from "../components/containers/AboutUsContainer";
import WidgetsContainer from "../components/containers/WidgetsContainer";

function Home() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden md:gap-1">
      <div className="h-fit w-full">
        <MainBanner />
      </div>
      <WidgetsContainer />
      <AboutUsContainer />
    </div>
  );
}

export default Home;
