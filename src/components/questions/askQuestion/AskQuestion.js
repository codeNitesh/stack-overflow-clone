import React, { useState } from "react";
import axios from "axios";
import "./AskQuestion.css";
import { useNavigate } from "react-router-dom";

function AskQuestion() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  function getToken() {
    return localStorage.getItem("token");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title, body, tags: tags.split(",") };
    const token = getToken();

    axios
      .post("http://localhost:3000/questions", data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setSuccessMessage("Question posted successfully!");
        setErrorMessage("");
        setBody("");
        setTags("");
        setTitle("");
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage("Error posting question. Please try again.");
        console.error("Error posting question:", error);
      });
  };

  const navigate = useNavigate();

  const goToHomePage = () => {
    let path = `/app`;
    navigate(path);
  };

  return (
    <div className="ask-question">
      <div className="ask-question-form">
        <span style={{ cursor: "pointer" }} onClick={goToHomePage}>
          {"< Go back"}
        </span>
        <hr />
        <h2>Ask a Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={handleBodyChange}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="tags">Tags (comma-separated):</label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={handleTagsChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default AskQuestion;
