import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SchoolsPage from "./pages/SchoolsPage";
import LearningWithIndustryPage from "./pages/LearningWithIndustryPage";
import EvaluationPage from "./pages/EvaluationPage";
import SkillsInHigherEducationPage from "./pages/SkillsInHigherEducationPage";
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
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools/:schoolId" element={<SchoolsPage />} />
        <Route
          path="/learning-with-industry"
          element={<LearningWithIndustryPage />}
        />
        <Route path="/evaluation" element={<EvaluationPage />} />
        <Route
          path="/skills-in-higher-education"
          element={<SkillsInHigherEducationPage />}
        />
 
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
      </Routes>

    </BrowserRouter>
  
  );
};

export default App;
