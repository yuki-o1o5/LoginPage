import { QuizeCard } from "../../commonComponents/QuizeCard/QuizeCard";
import { useNavigate } from "react-router-dom";
import "./Quize.css";
import React from "react";

function Quize({ fetchData, number }) {
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);
  const navigate = useNavigate();

  function updateSelectedAnswer(value, idx) {
    // Here you will add answers to the selectedAnnswers
    // setSelectedAnswers([...selectedAnswers, ...value]);
    // const newArray = [];
    // newArray.unshift(value);
    // let finalArray = [...selectedAnswers, ...newArray];
    // // You have to check if that id of the same questions exists inside the final array or not. If it exists, then don't add it.
    // finalArray = finalArray
    //   .filter((item) => item)
    //   .map((item) => {
    //     if (typeof item === "string") {
    //       item = JSON.parse(item);
    //     }
    //     return item;
    //   });
    const newAnswers = [...selectedAnswers];
    const valueObj = JSON.parse(value || "{}");
    newAnswers[idx] = valueObj.answer;
    setSelectedAnswers(newAnswers);
  }

  function calculateScore() {
    // fetchData  = [{},{},..], selectedAnswers = ["asn1", "ans2",...];
    let score = 0;
    fetchData.forEach((quize, idx) => {
      if (quize.correctAnswer === selectedAnswers[idx]) {
        score++;
      }
    });
    // set to local storage
    const existingData = JSON.parse(localStorage.getItem("userData"));
    const existingUser = localStorage.getItem("currentUser");
    existingData.forEach((user) => {
      if (user.username === existingUser) {
        user.score = score;
      }
    });
    localStorage.setItem("userData", JSON.stringify(existingData));
    navigate("/end");
  }

  React.useEffect(() => {
    console.log(selectedAnswers, "selected Aswer");
  }, [selectedAnswers]);

  return (
    <div className="primaryContainer">
      <div className="quizeCotainer">
        <div className="category">Category</div>
        {fetchData.map((item, idx) => {
          const answers = item.incorrectAnswers.map((answer) => {
            return {
              id: item.question,
              answer,
              isCorrect: false,
            };
          });
          // const randomNumberIndex = Math.random() * 3;
          // answers.splice(randomNumberIndex, 0, {
          //   answer: item.correctAnswer,
          //   isCorrect :true
          // }, )
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
        <button onClick={calculateScore}>submit</button>
      </div>
    </div>
  );
}

export default Quize;
