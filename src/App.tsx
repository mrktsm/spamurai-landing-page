import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Home from "./pages/Home.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
