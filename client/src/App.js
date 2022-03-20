import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./authentification/SignIn";
import TopNav from "./layout/Navbar";
import SignUp from "./authentification/SignUp";
import ForgotPassword from "./authentification/ForgotPassword";
import ProfilePage from "./pages/ProfilePage";
import MyQuestions from "./pages/MyQuestions";
import QuestionPage from "./pages/QuestionPage";
import SignOut from "./authentification/SignOut";

function App() {
  return (
    <header className="App">
      <div>
        <Router>
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/question-page" element={<QuestionPage />} />{" "}
            <Route path="/profile-page" element={<ProfilePage />} />{" "}
            <Route path="/my-questions" element={<MyQuestions />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </div>
    </header>
  );
}

export default App;
