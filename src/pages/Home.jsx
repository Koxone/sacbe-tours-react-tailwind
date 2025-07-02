import MainBanner from "../components/banner/MainBanner";
import AboutUsContainer from "../components/containers/AboutUsContainer";
import WidgetsContainer from "../components/containers/WidgetsContainer";
import Menu from "../components/nav/Menu";

function Home() {
  return (
    <div className="flex flex-col md:gap-14">
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
