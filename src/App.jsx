import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./styles/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
