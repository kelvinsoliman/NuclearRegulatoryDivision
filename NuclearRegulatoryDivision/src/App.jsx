import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar";
import HeroSection from "./components/Homepage/HeroSection";
import ServicesSection from "./components/Homepage/ServicesSection";
import InteractSection from "./components/Homepage/InteractSection";
import AboutUs from "./components/Homepage/AboutUs";
import VisitUs from "./components/Homepage/VisitUs";
import Regulations from "./components/Regulations";
import NuclearRegulatoryDiv from "./components/NuclearRegulatoryDiv";
import Lres from "./components/LRES/Lres";
import Licensing from "./components/LRES/Licensing";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <InteractSection />
                <ServicesSection />
                <AboutUs />
                <VisitUs />
              </>
            }
          />

          <Route path="/regulations" element={<Regulations />} />
          <Route path="/nrd" element={<NuclearRegulatoryDiv />} />
          <Route path="/lres" element={<Lres />} />
          <Route path="/Licensing" element={<Licensing />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
