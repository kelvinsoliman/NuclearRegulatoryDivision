import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
// import LicensingAdmin from "./components/LRES/AdminLRE/LicensingAdmin";
import Article from "./components/Homepage/Article";
import RSDSGuidelines from "./components/RSDS/RSDSGuidelines";
import DivisionHeads from "./components/Homepage/DivisionHeads";
import RSDSInformation from "./components/RSDS/RSDSInformation";
import RSDSBulletin from "./components/RSDS/RSDSBulletin";
import RSDSAdminOrders from "./components/RSDS/RSDSAdminOrders";
import RSDSAnnouncement from "./components/RSDS/RSDSAnnouncement";
import AdminDashboard from "./components/Admin/AdminDashboard";
import NSSSContact from "./components/NSSS/NSSSContact";
import Ies from "./components/IES/Ies";
import InspectionPage from "./components/IES/inspectionpage";
import IesPermit from "./components/IES/IesPermit";
import IesComplaint from "./components/IES/IesComplaint";
import RsdsContact from "./components/RSDS/RsdsContact";
import IesContact from "./components/IES/IesContact";
import LresContacts from "./components/LRES/LresContacts";
import Header from "./components/Homepage/Header";
import RIASContacts from "./components/RIAS/RIASContacts";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/AdminDashboard"]; // Routes where navbar should be hidden

  return (
    <div className="font-sans">
      {/* Show Navbar only if the current route is NOT in hideNavbarRoutes */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <InteractSection />
              <DivisionHeads />
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
        {/* <Route path="/LicensingAdmin" element={<LicensingAdmin />} /> */}
        <Route path="/RSDSInformation" element={<RSDSInformation />} />
        <Route path="/RSDSBulletin" element={<RSDSBulletin />} />
        <Route path="/RSDSAdminOrders" element={<RSDSAdminOrders />} />
        <Route path="/RSDSAnnouncement" element={<RSDSAnnouncement />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/NSSSContact" element={<NSSSContact />} />
        <Route path="/ies" element={<Ies />} />
        <Route path="/inspectionpage" element={<InspectionPage />} />
        <Route path="/IesPermit" element={<IesPermit />} />
        <Route path="/IesComplaint" element={<IesComplaint />} />
        <Route path="/RsdsContact" element={<RsdsContact />} />
        <Route path="/IesContact" element={<IesContact />} />
        <Route path="/RIASContacts" element={<RIASContacts />} />

        {/* <Route path="/permit" element={ <Permit/>}/>
          <Route path="/complaint" element={<Complaint/>}/>
          <Route path="/inspectionpage" element={<InspectionPage/>}/>
          <Route path="/Activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} /> */}

        <Route
          path="/Contacts"
          element={
            <>
              <Header />
              <HeroSection />
              <Contacts />
            </>
          }
        />

        <Route
          path="/Activities"
          element={
            <>
              <Header />
              <HeroSection />
              <Activities />
            </>
          }
        />

        <Route
          path="/Article"
          element={
            <>
              <Header />
              <HeroSection />
              <Article />
            </>
          }
        />

        <Route
          path="/LresContacts"
          element={
            <>
              <LresContacts />
            </>
          }
        />

        <Route path="/Guidelines" element={<RSDSGuidelines />} />
      </Routes>
    </div>
  );
}

export default App;
