import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Homepage/Navbar";
import HeroSection from "./components/Homepage/HeroSection";
import ServicesSection from "./components/Homepage/ServicesSection";
import InteractSection from "./components/Homepage/InteractSection";
import AboutUs from "./components/Homepage/AboutUs";
import VisitUs from "./components/Homepage/VisitUs";
import Regulations from "./components/RSDS/Regulations";
import NuclearRegulatoryDiv from "./components/Homepage/NuclearRegulatoryDiv";
import Lres from "./components/LRES/Lres";
import Licensing from "./components/LRES/Licensing";
import LresServices from "./components/LRES/LresServices";
import ReviewEvaluation from "./components/LRES/ReviewEvaluation";
import LresStaffs from "./components/LRES/LresStaffs";
import MissionVision from "./components/Homepage/MissionVision";
import Contacts from "./components/Homepage/Contacts";
import LresRating from "./components/LRES/LresRating";
import Rsds from "./components/RSDS/Rsds";
import Achievements from "./components/LRES/Achievements";
import Nsss from "./components/NSSS/Nsss";
import Rias from "./components/RIAS/Rias";
import Activities from "./components/Homepage/Activities";
import LicensingAdmin from "./components/LRES/AdminLRE/LicensingAdmin";
import Article from "./components/Homepage/Article";
import RSDSGuidelines from "./components/RSDS/RSDSGuidelines";

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
                {/* <AboutUs /> */}
                <VisitUs />
              </>
            }
          />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/nrd" element={<NuclearRegulatoryDiv />} />
          <Route path="/lres" element={<Lres />} />
          <Route path="/Licensing" element={<Licensing />} />
          <Route path="/lresservices" element={<LresServices />} />
          <Route path="/ReviewEvaluation" element={<ReviewEvaluation />} />
          <Route path="/LresStaffs" element={<LresStaffs />} />
          <Route path="/MissionVision" element={<MissionVision />} />
          <Route path="/Rsds" element={<Rsds />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Nsss" element={<Nsss />} />
          <Route path="/Rias" element={<Rias />} />
          <Route path="/LicensingAdmin" element={<LicensingAdmin />} />

          <Route
            path="/Contacts"
            element={
              <>
                <HeroSection />
                <Contacts />
              </>
            }
          />

          <Route
            path="/Activities"
            element={
              <>
                <HeroSection />
                <Activities />
              </>
            }
          />

          <Route
            path="/Article"
            element={
              <>
                <HeroSection />
                <Article />
              </>
            }
          />

          <Route
            path="/Guidelines"
            element={
              <>
                <RSDSGuidelines />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
