import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuestionList.css";
import { useNavigate } from "react-router-dom";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function getToken() {
    return localStorage.getItem("token");
  }

  const navigate = useNavigate();

  const redirectToAddQuestion = () => {
    let path = `/app/ask`;
    navigate(path);
  };

  useEffect(() => {

    if(!localStorage.getItem("token")){
      window.location.href = "/login"
    }
    const token = getToken();

    axios
      .get("http://localhost:3000/questions", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const token = getToken();

    axios
      .get(`http://localhost:3000/search?query=${searchQuery}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error searching questions:", error);
      });
  };

  const logout = () => {
    localStorage.clear()
    window.location.href = "/login";
  };

  return (
    <div className="questions">
      <div className="question-form">
        <div className="logout" onClick={logout}>{'LOGOUT >'}</div>
        <hr />
        <h2>ALL QUESTIONS</h2>
        <form onSubmit={handleSearchSubmit}>
          <div>
            <input
              type="text"
              placeholder="Search questions by title or tag"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </div>
          <div>
            <button onClick={redirectToAddQuestion} className="add-question">
              ADD QUESTION
            </button>
          </div>
        </form>

        <ul>
          <p className="results">
            {searchResults.length > 0
              ? `${searchResults.length} SEARCH RESULTS`
              : `DISPLAYING ALL RESULTS, 0 SEARCH RESULTS`}
          </p>

          {searchResults.length > 0
            ? searchResults.map((question) => (
                <li key={question._id}>
                  <a href={`/app/questions/${question._id}`}>
                    {question.title}
                  </a>
                </li>
              ))
            : questions.map((question) => (
                <li key={question._id}>
                  <a href={`/app/questions/${question._id}`}>
                    {question.title}
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default QuestionList;
