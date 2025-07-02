import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Layout({ children }) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
