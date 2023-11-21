 import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StudentDashboard from "./layouts/StudentDashboard";
import AdminDashboard from "./layouts/AdminDashboard";
import LoginPage from "./layouts/LoginPage";
import ExperimentRegistration from "./components/ExperimentRegistration/ExperimentRegistration";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <main className="App-main">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/dashboard/register" element={<ExperimentRegistration/>} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
