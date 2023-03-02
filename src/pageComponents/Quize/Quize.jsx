import { QuizeCard } from "../../commonComponents/QuizeCard/QuizeCard";
import "./Quize.css";

function Quize({
  fetchData,
  number,
}) {
  return (
    <div className="primaryContainer">
      <div className="quizeCotainer">
        <div className="category">Category</div>
        {fetchData.map((item) => (
          <QuizeCard
            number={number++}
            question={item.question}
            collectAnswer={item.correctAnswer}
            wrongAnswer1={item.incorrectAnswers[0]}
            wrongAnswer2={item.incorrectAnswers[1]}
            wrongAnswer3={item.incorrectAnswers[2]}
          />
        ))}
      </div>
    </div>
  );
}

export default Quize;
