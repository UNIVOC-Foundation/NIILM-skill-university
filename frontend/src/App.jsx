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
import Reports from "./pages/Reports";
import Guidelines from "./pages/Guidelines";
import Administration from "./pages/Administration";
import Niilmfoundation from "./pages/Niilmfoundation";
import CentralFacilities from "./pages/CentralFacilities";
import BeliefSection from "./pages/BeliefSection";
import LearningEcosystem from "./pages/LearningEcosystem";
import Experts from "./components/Academics/Experts";
import Abc from "./components/Academics/Abc";
import NEP from "./components/Academics/Nep";
import Rnd from "./components/Academics/Rnd";
import Student from "./components/Academics/Student";
import Sports from "./components/Life/Sports";
import Culture from "./components/Life/Culture";
import Happy from "./components/Life/Happy";
import NSS from "./components/Life/NSS";
import SEDG from "./components/Life/SEDG";
import News from "./components/Happening/News";
import Blogs from "./components/Happening/Blogs";
import NewsLetter from "./components/Happening/NewsLetter";
import Circulars from "./components/Happening/Circulars";
import Media from "./components/Happening/media";

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
        <Route path="/reports" element = {<Reports/>} />
        <Route path="/guidelines" element={<Guidelines/>}/>
        <Route path="/NiilmFoundation" element={< Niilmfoundation/>}/>
       <Route path= "/Administration" element={<Administration/>}/>
       <Route path="/Centralfacilities" element={<CentralFacilities/>} />
       <Route path="/webelieve" element={<BeliefSection/>}/>
       <Route path="/learningecosystem" element={<LearningEcosystem/>}/>
       
        {/* */}

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
 
 <Route path='/Academics/Experts' element={<Experts/>}/>
 <Route path='/Academics/Abc' element={<Abc/>}/>
 <Route path='/Academics/Nep' element={<NEP/>}/>
 <Route path='/Academics/Rnd' element={<Rnd/>}/>
 <Route path='/Academics/Student' element={<Student/>}/>
 <Route path='/Life/Sports' element={<Sports/>}/>
 <Route path='/Life/Culture' element={<Culture/>}/>
 <Route path='/Life/Happy' element={<Happy/>}/>
 <Route path='/Life/NSS' element={<NSS/>}/>
 <Route path='/Life/SEDG' element={<SEDG/>}/>
 <Route path="/Happening/News" element={<News/>}/>
 <Route path="/Happening/Blogs" element={<Blogs/>}/>
 <Route path="/Happening/NewsLetter" element={<NewsLetter/>}/>
 <Route path="/Happening/Circulars" element={<Circulars/>}/>
 <Route path="/Happening/Media" element={<Media/>}/>


      


    </BrowserRouter>
  
  );
};

export default App;
