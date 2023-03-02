import { useEffect, useState } from "react";
import Quize from "../pageComponents/Quize/Quize";
import "./Main.css";

function Main() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchQuize = async (categories, limit, difficulty) => {
      try {
        const questions = await fetch(
          `https://the-trivia-api.com/api/questions?categories=${categories}&limit=${limit}&region=CA&difficulty=${difficulty}`
        );
        const questionsJson = await questions.json();
        setFetchData(questionsJson);
      } catch (e) {
        console.log(e);
      }
    };
    fetchQuize("film_and_tv", 20, "medium");
  }, []);

  return (
    <div>
      <Quize fetchData={fetchData} number="1" />
    </div>
  );
}

export default Main;
