import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuizContainer from "../pageComponents/Quize/QuizContainer";

const QuizPage = () => {
  const [fetchData, setFetchData] = useState([]);
  let params = useParams();
  const { category } = params;

  useEffect(() => {
    const fetchQuize = async (limit, difficulty) => {
      try {
        const questions = await fetch(
          `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&region=CA&difficulty=${difficulty}`
        );
        const questionsJson = await questions.json();
        setFetchData(questionsJson);
      } catch (e) {
        console.log(e);
      }
    };
    fetchQuize(20, "medium");
  }, []);

  return (
    <div>
      <QuizContainer fetchData={fetchData} category={category} />
    </div>
  );
};

export default QuizPage;
