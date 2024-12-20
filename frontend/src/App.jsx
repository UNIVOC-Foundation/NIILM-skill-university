import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SchoolsPage from "./pages/SchoolsPage";
import LearningWithIndustryPage from "./pages/LearningWithIndustryPage";
import EvaluationPage from "./pages/EvaluationPage";
import SkillsInHigherEducationPage from "./pages/SkillsInHigherEducationPage";
import WisePage from "./pages/WisePage";
import UndergraduatePage from "./pages/UndergraduatePage";
import PostgraduatePage from "./pages/PostgraduatePage";
import AdmissionProcessPage from "./pages/AdmissionProcessPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import EligibilityPage from "./pages/EligibilityPage";
import WhyNiilmPage from "./pages/WhyNiilmPage";
import LeadershipPage from "./pages/LeadershipPage";
import RecognitionPage from "./pages/RecognitionPage";
import Footer from "./components/Footer";
import InfrastructurePage from "./pages/InfrastructurePage";
import AwardsPage from "./pages/AwardsPage";
import ExpertsPage from "./pages/ExpertsPage";
import AbcPage from "./pages/AbcPage";
import NepPage from "./pages/NepPage";
import RndPage from "./pages/RndPage";
import StudentShowcasePage from "./pages/StudentShowcasePage";
import CulturePage from "./pages/CulturePage";
import HappyFacePage from "./pages/HappyFacePage";
import NssPage from "./pages/NssPage";
import SedgPage from "./pages/SedgPage";
import SportsPage from "./pages/SportsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* About Us tab */}
        <Route path="/why-niilm" element={<WhyNiilmPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/recognition" element={<RecognitionPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/experts" element={<ExpertsPage />} />
        <Route path="/abc" element={<AbcPage />} />
        <Route path="/nep" element={<NepPage />} />
        <Route path="/rnd" element={<RndPage />} />
        <Route path="/student-showcase" element={<StudentShowcasePage />} />

        {/* Academics tab */}
        <Route
          path="/learning-with-industry"
          element={<LearningWithIndustryPage />}
        />
        <Route path="/evaluation" element={<EvaluationPage />} />
        <Route
          path="/skills-in-higher-education"
          element={<SkillsInHigherEducationPage />}
        />

        {/* Admissions tab */}
        <Route path="/wise" element={<WisePage />} />
        <Route path="/undergraduate" element={<UndergraduatePage />} />
        <Route path="/postgraduate" element={<PostgraduatePage />} />
        <Route path="/admission-process" element={<AdmissionProcessPage />} />
        <Route path="/scholarship" element={<ScholarshipPage />} />
        <Route path="/eligibility" element={<EligibilityPage />} />

        {/* Schools tab */}
        <Route path="/schools/:schoolId" element={<SchoolsPage />} />

        {/* Life at NIILM tab */}
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/happy-face" element={<HappyFacePage />} />
        <Route path="/nss" element={<NssPage />} />
        <Route path="/sedg" element={<SedgPage />} />
        <Route path="/sports" element={<SportsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
