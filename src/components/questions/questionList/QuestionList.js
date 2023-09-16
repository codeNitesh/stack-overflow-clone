import React, { useState, useEffect } from "react";
import axios from "axios";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function getToken() {
    return localStorage.getItem("token");
  }

  useEffect(() => {
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

  return (
    <div>
      <h2>Questions</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search questions by title or tag"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchResults.length > 0
          ? `${searchResults.length} SEARCH RESULTS`
          : `ALL RESULT, 0 SEARCH RESULTS`}
        {searchResults.length > 0
          ? searchResults.map((question) => (
              <li key={question._id}>
                <a href={`/app/questions/${question._id}`}>{question.title}</a>
              </li>
            ))
          : questions.map((question) => (
              <li key={question._id}>
                <a href={`/app/questions/${question._id}`}>{question.title}</a>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default QuestionList;
