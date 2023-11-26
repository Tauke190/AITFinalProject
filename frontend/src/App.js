import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentDashboard from "./layouts/StudentDashboard";
import AdminDashboard from "./layouts/AdminDashboard";
import LoginPage from "./layouts/LoginPage";
import ExperimentRegistration from "./components/ExperimentRegistration/ExperimentRegistration";
import LandingPage from "./layouts/LandingPage/LandingPage";
import MyExperiment from "./layouts/MyExperiments/MyExperiments";
import { CreateExperiment } from "./components/CreateExperiment/CreateExperiment";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <main className="App-main">
     
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/dashboard/register" element={<ExperimentRegistration/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/experiment" element={<CreateExperiment isVisible={true} />} />
            <Route path="/student/myexperiments" element={<MyExperiment />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
