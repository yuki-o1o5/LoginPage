import { QuizeCard } from "../QuizeCard/QuizeCard";
import { useNavigate } from "react-router-dom";
import "./QuizContainer.css";
import { useEffect, useState } from "react";

function QuizContainer({ fetchData, category }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

  function updateSelectedAnswer(value, idx) {
    const newAnswers = [...selectedAnswers];
    const valueObj = JSON.parse(value || "{}");
    newAnswers[idx] = valueObj.answer;
    setSelectedAnswers(newAnswers);
  }

  function calculateScore() {
    let score = 0;
    fetchData.forEach((quize, idx) => {
      if (quize.correctAnswer === selectedAnswers[idx]) {
        score++;
      }
    });
    // set to local storage
    let existingData = JSON.parse(localStorage.getItem("userData"));
    const existingUser = localStorage.getItem("currentUser");
    existingData = existingData.map((user) => {
      if (user.username === existingUser) {
        user.score = score;
      }
      return user;
    });

    localStorage.setItem("userData", JSON.stringify(existingData));
    navigate("/result");
  }

  useEffect(() => {
    console.log(selectedAnswers, "selected Aswer");
  }, [selectedAnswers]);

  return (
    <div className="primaryContainer">
      <div className="quizeCotainer">
        <div className="category">{category}</div>
        {fetchData.map((item, idx) => {
          const answers = item.incorrectAnswers.map((answer) => {
            return {
              id: item.question,
              answer,
              isCorrect: false,
            };
          });
          answers.splice(0, 0, {
            answer: item.correctAnswer,
            isCorrect: true,
            id: item.question,
          });

          return (
            <QuizeCard
              number={idx + 1}
              question={item.question}
              answers={answers}
              updateQuizAnswer={(value) => updateSelectedAnswer(value, idx)}
              // answers=
              key={item.id}
            />
          );
        })}
        <div className="buttonContainer">
          <button className="button" onClick={calculateScore}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizContainer;
