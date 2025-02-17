import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Commissioning from "./Pages/Commissioning";
import Contact from "./Pages/Contact";
import ElectronicRepair from "./Pages/ElectronicRepair";
import EquipmentInstallation from "./Pages/EquipmentInstallation";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import PostInstallationSupport from "./Pages/PostInstallationSupport";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Services from "./components/Services/Services";
import SystemIntegration from "./Pages/SystemIntegration";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipment-installation" element={<EquipmentInstallation />} />
        <Route path="/electrical-repair" element={<ElectronicRepair />} />
        <Route path="/system-integration" element={<SystemIntegration />} />
        <Route path="/post-installation-support" element={<PostInstallationSupport />} />
        <Route path="/commissioning" element={<Commissioning />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
