import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AnswerList from '../../answers/Answers';
import AddAnswer from '../../answers/AddAnswer';

function QuestionDetail({ match }) {
  const [question, setQuestion] = useState(null);
  const { id } = useParams();
  function getToken() {
    return localStorage.getItem("token");
  }

  useEffect(() => {
    const token = getToken();

    axios
      .get(`http://localhost:3000/questions/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => {
        console.error("Error fetching question details:", error);
      });
  }, [id]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.body}</p>
      <ul>
        {question.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>Author Id: {question.author}</p>
      <p>Date Posted: {new Date(question.createdAt).toLocaleDateString()}</p>
      <AddAnswer questionId={question._id}/>
      <AnswerList questionId={question._id} isAuthorOfQuestion={question.author === localStorage.getItem("user_id")}/>
      
    </div>
  );
}

export default QuestionDetail;
