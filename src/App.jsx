// src/App.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from "./components/pageComponents/LoginPage";
import JobOpportunitiesPage from "./components/pageComponents/JobOpportunitiesPage";
import RegisteredCandidatesPage from './components/pageComponents/RegisteredCandidatesPage ';
import './index.css';

// JSON configuration for the entire application
const appConfig = {
  jobOpportunitiesPage: {
    headerTitle: "INNOTRAT",
    logoutButtonLabel: "Logout",
    sidebarNav: [
      { "label": "Home", "path": "/jobs", "icon": "home", "isActive": true },
      { "label": "Job Opportunities", "path": "/jobs", "icon": "jobs", "isActive": false },
      // Set 'isVisible: false' here to hide 'Registered Candidates' from sidebar
      { "label": "Registered Candidates", "path": "/registered-candidates", "icon": "candidates", "isVisible": true },
      { "label": "My Profile", "path": "/my-profile", "icon": "profile", "isVisible": true }
    ],
    mainContent: {
      sectionTitle: "Job Opportunities",
      searchPlaceholder: "Search job titles...",
      searchButtonLabel: "Search"
    },
    jobCardButtons: {
      "showApplyButton": true,
      "showViewCandidatesButton": true,
      "showViewDescriptionButton": true
    },
    jobs: [
      {
        "id": "1",
        "jobCode": "J3OC38",
        "jobTitle": "Embedded Engineer",
        "companyName": "Innovate Private Limited",
        "location": "Berhampur, Odisha",
        "experience": "0-3 yrs",
        "applicants": 12,
        "status": "Active"
      },
      {
        "id": "2",
        "jobCode": "J3OC39",
        "jobTitle": "Software Developer",
        "companyName": "Tech Solutions Inc.",
        "location": "Bangalore, Karnataka",
        "experience": "2-5 yrs",
        "applicants": 25,
        "status": "Active"
      },
      {
        "id": "3",
        "jobCode": "J3OC40",
        "jobTitle": "UI/UX Designer",
        "companyName": "Creative Minds Studio",
        "location": "Pune, Maharashtra",
        "experience": "1-4 yrs",
        "applicants": 8,
        "status": "Active"
      },
      {
        "id": "4",
        "jobCode": "J3OC41",
        "jobTitle": "Data Scientist",
        "companyName": "Data Insights Co.",
        "location": "Hyderabad, Telangana",
        "experience": "3-6 yrs",
        "applicants": 18,
        "status": "Active"
      }
    ]
  },
  registeredCandidatesPage: { 
    headerTitle: "INNOTRAT",
    logoutButtonLabel: "Logout",
    sidebarNav: [
      { "label": "Home", "path": "/jobs", "icon": "home", "isActive": false },
      { "label": "Job Opportunities", "path": "/jobs", "icon": "jobs", "isActive": false },
      { "label": "Registered Candidates", "path": "/registered-candidates", "icon": "candidates", "isVisible": true, "isActive": true }, 
      { "label": "My Profile", "path": "/my-profile", "icon": "profile", "isVisible": true }
    ],
    
  },
  loginPage: {
    welcomeIllustrationAlt: "Welcome to Innoview Illustration",
    welcomeTitle: "Welcome To Innoview",
    welcomeText: "Providing opportunities that help improve the modern workforce.",
    loginTitle: "Login",
    emailInputLabel: "Email id/Phone No.",
    emailInputPlaceholder: "Enter your email or phone number",
    passwordInputLabel: "Password",
    passwordInputPlaceholder: "Enter your password",
    keepLoggedInLabel: "Keep Me Logged In",
    forgotPasswordLabel: "Forgot Password?",
    loginButtonLabel: "Login",
    noAccountText: "Don't Have An Account?",
    registerButtonLabel: "Register"
  }
};


function App() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/jobs');
  };

  const handleRegisterClick = () => {
    console.log('Navigate to Registration Page');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={handleLoginSuccess} onRegisterClick={handleRegisterClick} config={appConfig.loginPage} />}
        />
        <Route
          path="/"
          element={<LoginPage onLoginSuccess={handleLoginSuccess} onRegisterClick={handleRegisterClick} config={appConfig.loginPage} />}
        />
        <Route
          path="/jobs"
          element={<JobOpportunitiesPage onLogout={handleLogout} config={appConfig.jobOpportunitiesPage} />}
        />
        {/* New Route for Registered Candidates Page */}
        <Route
          path="/registered-candidates"
          element={<RegisteredCandidatesPage onLogout={handleLogout} config={appConfig.registeredCandidatesPage} />}
        />
      </Routes>
    </div>
  );
}

export default App;