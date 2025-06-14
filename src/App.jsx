import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CompatibilityTest from "./pages/CompatibilityTest";
import Journal from "./pages/Journal";
import Insights from "./pages/Insights";
import PartnerProfile from "./pages/PartnerProfile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

export default function App() {
  return (
    <div className="pt-20 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 py-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/compatibility" element={<CompatibilityTest />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/partner" element={<PartnerProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
