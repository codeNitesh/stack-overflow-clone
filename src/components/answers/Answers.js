import React, { useEffect, useState } from "react";
import axios from "axios";
import "./answers.css";

function AnswerList({ questionId, isAuthorOfQuestion }) {
  const [answers, setAnswers] = useState([]);

  function getToken() {
    return localStorage.getItem("token");
  }

  useEffect(() => {
    const token = getToken();

    axios
      .get(`http://localhost:3000/answers/question/${questionId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        // Sort answers so that the accepted answer is at the top
        const sortedAnswers = response.data.sort(
          (a, b) => b.accepted - a.accepted
        );
        setAnswers(sortedAnswers);
      })
      .catch((error) => {
        console.error("Error fetching answers:", error);
      });
  }, [questionId]);

  const markAsAccepted = (_id) => {
    const token = getToken();

    axios
      .put(
        `http://localhost:3000/answers/${_id}/accept`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error marking answer as accepted:", error);
      });
  };

  return (
    <div className="answers">
      <h2>Answers</h2>
      <ul>
        {answers.length === 0 ? <p>No answers yet!</p> : ""}
        {answers.map((answer) => (
          <li
            key={answer._id}
            style={{
              backgroundColor: answer.accepted ? "lightyellow" : "transparent",
            }}
          >
            <p>BODY: {answer.body}</p>
            <p>CREATED AT: {answer.createdAt}</p>
            <p>AUTHOR ID: {answer.author}</p>
            <p>ACCEPTED: {answer.accepted ? "YES" : "NO"}</p>

            {isAuthorOfQuestion && !answer.accepted && (
              <button onClick={() => markAsAccepted(answer._id)}>
                Mark as Accepted
              </button>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnswerList;
