import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import QuestionList from "./components/questions/questionList/QuestionList";
import QuestionDetail from "./components/questions/questionDetail/QuestionDetail";
import AskQuestion from "./components/questions/askQuestion/AskQuestion";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />

          <Route exact path="/app" element={<QuestionList />} />
          <Route path="/app/questions/:id" element={<QuestionDetail />} />
          <Route path="/app/ask" element={<AskQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
