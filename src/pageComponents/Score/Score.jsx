import StepButtonSm from "../../commonComponents/StepButtonSm/StepButtonSm.jsx";
import TopPlayer from "../../commonComponents/TopPlayer/TopPlayer.jsx";
import "./Score.css";

function Score({ myScore, allQ, order, userName }) {
  return (
    <div className="primaryContainer">
      <div className="scoreCotainer">
        <div className="myScore">
          <h2>Your Score</h2>
          <div className="score">
            {myScore}
            <span>/{allQ}</span>
          </div>
        </div>
        <div className="topPlayers">
          <h2>Top 3 players</h2>
          <div className="topPlayersList">
            <TopPlayer order={order} userName={userName} />
            <TopPlayer order={order} userName={userName} />
            <TopPlayer order={order} userName={userName} />
          </div>
        </div>
        <div className="stepButtonContainer">
          <StepButtonSm word="Category" />
          <StepButtonSm word="ReStart" />
        </div>
      </div>
    </div>
  );
}

export default Score;
