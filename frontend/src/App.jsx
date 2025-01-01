import { BrowserRouter, Route, Routes } from "react-router-dom";

// Common Imports
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WisePage from "./pages/WisePage";

// About Tab Imports
import WhyNiilmPage from "./pages/About/WhyNiilmPage";
import WhoWeArePage from "./pages/About/WhoWeArePage";
import LeadershipPage from "./pages/About/LeadershipPage";
import RecognitionPage from "./pages/About/RecognitionPage";
import InfrastructurePage from "./pages/About/InfrastructurePage";
import AwardsPage from "./pages/About/AwardsPage";
import ReportsPage from "./pages/About/ReportsPage";
import GuidelinesPage from "./pages/About/GuidelinesPage";
import AdministrationPage from "./pages/About/AdministrationPage";
import CentralFacilitiesPage from "./pages/About/CentralFacilitiesPage";

// Academic Tab Imports
import SkillsInHigherEducationPage from "./pages/Academics/SkillsInHigherEducationPage";
import WeBelievePage from "./pages/Academics/WeBelievePage";
import LearningEcosystemPage from "./pages/Academics/LearningEcosystemPage";
import DesignYourOwnDegreePage from "./pages/Academics/DesignYourOwnDegreePage";
import LearningWithIndustryPage from "./pages/Academics/LearningWithIndustryPage";
import EvaluationPage from "./pages/Academics/EvaluationPage";
import StudentShowcasePage from "./pages/Academics/StudentShowcasePage";
import ExpertsPage from "./pages/Academics/ExpertsPage";
import AbcPage from "./pages/Academics/AbcPage";
import NepPage from "./pages/Academics/NepPage";
import RndPage from "./pages/Academics/RndPage";

// Admissions Tab Imports
import UndergraduatePage from "./pages/Admissions/UndergraduatePage";
import PostgraduatePage from "./pages/Admissions/PostgraduatePage";
import AdmissionProcessPage from "./pages/Admissions/AdmissionProcessPage";
import ScholarshipPage from "./pages/Admissions/ScholarshipPage";
import EligibilityPage from "./pages/Admissions/EligibilityPage";

// Collaborations Tab Imports
import SkillingPage from "./pages/Collaborations/SkillingPage";

// Schools Tab Imports
import SchoolsPage from "./pages/Schools/SchoolsPage";

// Life At NIILM Tab Imports
import CulturePage from "./pages/LifeAtNIILM/CulturePage";
import HappyFacePage from "./pages/LifeAtNIILM/HappyFacePage";
import NssPage from "./pages/LifeAtNIILM/NssPage";
import SedgPage from "./pages/LifeAtNIILM/SedgPage";
import SportsPage from "./pages/LifeAtNIILM/SportsPage";

// Happenings Tab Imports
import BlogPage from "./pages/Happenings/BlogPage";
import CircularsPage from "./pages/Happenings/CircularsPage";
import MediaPage from "./pages/Happenings/MediaPage";
import NewsLetterPage from "./pages/Happenings/NewsLetterPage";
import NewsPage from "./pages/Happenings/NewsPage";

// Details Tab Imports
import PayFeePage from "./pages/Details/PayFeePage";
import CampusLoginPage from "./pages/Details/CampusLoginPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wise" element={<WisePage />} />

        {/* About Us tab */}
        <Route path="/why-niilm" element={<WhyNiilmPage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/recognition" element={<RecognitionPage />} />
        <Route path="/infrastructure" element={<InfrastructurePage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/central-facilities" element={<CentralFacilitiesPage />} />

        {/* Academics tab */}
        <Route
          path="/skills-in-higher-education"
          element={<SkillsInHigherEducationPage />}
        />
        <Route path="/we-believe" element={<WeBelievePage />} />
        <Route path="/learning-ecosystem" element={<LearningEcosystemPage />} />
        <Route
          path="/design-your-own-degree"
          element={<DesignYourOwnDegreePage />}
        />
        <Route
          path="/learning-with-industry"
          element={<LearningWithIndustryPage />}
        />
        <Route path="/evaluation" element={<EvaluationPage />} />
        <Route path="/student-showcase" element={<StudentShowcasePage />} />
        <Route path="/experts" element={<ExpertsPage />} />
        <Route path="/abc" element={<AbcPage />} />
        <Route path="/nep" element={<NepPage />} />
        <Route path="/rnd" element={<RndPage />} />

        {/* Admissions tab */}
        <Route path="/undergraduate" element={<UndergraduatePage />} />
        <Route path="/postgraduate" element={<PostgraduatePage />} />
        <Route path="/admission-process" element={<AdmissionProcessPage />} />
        <Route path="/scholarship" element={<ScholarshipPage />} />
        <Route path="/eligibility" element={<EligibilityPage />} />

        {/* Schools tab */}
        <Route path="/schools/:schoolId" element={<SchoolsPage />} />

        {/* Collaborations tab */}
        <Route path="/industry" element={<LearningWithIndustryPage />} />
        <Route path="/skilling" element={<SkillingPage />} />
        <Route path="/research-collaborations" element={<SchoolsPage />} />

        {/* Life at NIILM tab */}
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/happy-face" element={<HappyFacePage />} />
        <Route path="/nss" element={<NssPage />} />
        <Route path="/sedg" element={<SedgPage />} />
        <Route path="/sports" element={<SportsPage />} />

        {/* Happenings tab */}
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/newsletter" element={<NewsLetterPage />} />
        <Route path="/circulars" element={<CircularsPage />} />
        <Route path="/media" element={<MediaPage />} />

        {/* Details tab */}
        <Route path="/campus-login" element={<CampusLoginPage />} />
        <Route path="/pay-fee" element={<PayFeePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
