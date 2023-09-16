import React, { useState } from "react";
import axios from "axios";

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
        setTitle("")
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage("Error posting question. Please try again.");
        console.error("Error posting question:", error);
      });
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          />
        </div>
        <div>
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
  );
}

export default AskQuestion;
