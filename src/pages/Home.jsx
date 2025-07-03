import MainBanner from "../components/banner/MainBanner";
import AboutUsContainer from "../components/containers/AboutUsContainer";
import WidgetsContainer from "../components/containers/WidgetsContainer";
import Menu from "../components/nav/Menu";

function Home() {
  return (
    <div className="flex w-screen flex-col overflow-hidden md:gap-1">
      <div className="h-fit">
        <Menu />
        <MainBanner />
      </div>
      <WidgetsContainer />
      <AboutUsContainer />
    </div>
  );
}

export default Home;
