import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import reportWebVitals from "./reportWebVitals";
import SignupPage from "./pages/SignupPage";
import CategoryPage from "./pages/CategoryPage";
import ResultPage from "./pages/ResultPage";
import QuizPage from "./pages/QuizPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
