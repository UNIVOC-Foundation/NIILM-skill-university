import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchoolsPage from "./pages/SchoolsPage";
import LearningWithIndustryPage from "./pages/LearningWithIndustryPage";
import EvaluationPage from "./pages/EvaluationPage";
import SkillsInHigherEducationPage from "./pages/SkillsInHigherEducationPage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
