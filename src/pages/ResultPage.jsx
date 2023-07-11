import ScoreContainer from "../pageComponents/ScoreContainer/ScoreContainer";
import "./ResultPage.css";

function ResultPage() {
  const existingData = JSON.parse(localStorage.getItem("userData"));
  const existingUser = localStorage.getItem("currentUser");

  let user = existingData.find((user) => user.username === existingUser);
  let currentScore = user?.score;

  let sortedUsers = existingData.sort(function compareNumbers(a, b) {
    return b.score - a.score;
  });

  let topPlayers = sortedUsers.slice(0, 3);

  return (
    <div>
      <div className="confetti">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ScoreContainer
        myScore={currentScore}
        allQ="20"
        userName1={topPlayers[0]?.username || ""}
        userName2={topPlayers[1]?.username || ""}
        userName3={topPlayers[2]?.username || ""}
      />
    </div>
  );
}

export default ResultPage;
