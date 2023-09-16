import React, { useState } from 'react';
import axios from 'axios';

function AddAnswer({ questionId }) {
  const [body, setBody] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  function getToken() {
    return localStorage.getItem("token");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = getToken();

    const data = { body, questionId };

    axios
    .post("http://localhost:3000/answers", data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setSuccessMessage('Answer posted successfully!');
        setErrorMessage('');
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error posting answer. Please try again.');
        console.error('Error posting answer:', error);
      });
  };

  return (
    <div>
      <h2>Post an Answer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="body">Your Answer:</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          />
        </div>
        <button type="submit">Submit Answer</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default AddAnswer;
