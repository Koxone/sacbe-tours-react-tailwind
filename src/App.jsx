import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./styles/Layout";
import Home from "./pages/Home";
import Tours from "./pages/Tours";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Home />} />
          <Route path="/tours/cancun" element={<Tours />} />
          <Route path="/tours/playa-del-carmen" element={<Tours />} />
          <Route path="/tours/tulum" element={<Tours />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
