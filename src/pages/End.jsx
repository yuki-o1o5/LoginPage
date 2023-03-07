import Score from "../pageComponents/Score/Score";
import "./End.css";

function End() {
  let currentScore;

  const existingData = JSON.parse(localStorage.getItem("userData"));
  const existingUser = localStorage.getItem("currentUser");
  existingData.forEach((user) => {
    if (user.username === existingUser) {
      currentScore = user.score;
      return;
    }
  });

  let topPlayers;
  let sortedUsers = existingData.sort(function compareNumbers(a, b) {
    return b.score - a.score;
  });

  topPlayers = sortedUsers.slice(0, 3);
  console.log(topPlayers);

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
      <Score
        myScore={currentScore}
        allQ="20"
        userName1={topPlayers[0].username}
        userName2={topPlayers[1].username}
        userName3={topPlayers[2].username}
      />
    </div>
  );
}

export default End;
