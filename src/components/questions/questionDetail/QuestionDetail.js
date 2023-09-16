import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AnswerList from "../../answers/Answers";
import AddAnswer from "../../answers/AddAnswer";
import "./QuestionDetail.css";
import { useNavigate } from 'react-router-dom';

function QuestionDetail({ match }) {
  const [question, setQuestion] = useState(null);
  const { id } = useParams();
  function getToken() {
    return localStorage.getItem("token");
  }

  const navigate = useNavigate();


  const goToHomePage =()=>{
    let path = `/app`; 
    navigate(path);
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
    <div className="question-details">
      <div className="question-details-form">
        <span style={{cursor: 'pointer'}} onClick={goToHomePage}>{"< Go back"}</span>
        <hr />
        <h2>{question.title}</h2>
        <p>{question.body}</p>
        <p>Author Id: {question.author}</p>
        <p>Date Posted: {new Date(question.createdAt).toLocaleDateString()}</p>
        <p>Tags: {question.tags.map((tag, index) => (
            <span>#{tag.trim()} </span>
          ))}</p>
        <hr />
        <AddAnswer questionId={question._id} />
        <hr />
        <AnswerList
          questionId={question._id}
          isAuthorOfQuestion={
            question.author === localStorage.getItem("user_id")
          }
        />
        <hr />
      </div>
    </div>
  );
}

export default QuestionDetail;
