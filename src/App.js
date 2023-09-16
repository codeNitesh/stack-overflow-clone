import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionList from "./components/questions/questionList/QuestionList";
import QuestionDetail from "./components/questions/questionDetail/QuestionDetail";
import AskQuestion from "./components/questions/askQuestion/AskQuestion";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<QuestionList />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/ask" element={<AskQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
