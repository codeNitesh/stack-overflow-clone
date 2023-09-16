import React, { useEffect, useState } from "react";
import axios from "axios";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log("hey")
    axios
      .get("http://localhost:3000/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  return <div>{"QUESTION LIST"}</div>;
}

export default QuestionList;
