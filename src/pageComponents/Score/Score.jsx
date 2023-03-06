import StepButtonSm from "../../commonComponents/StepButtonSm/StepButtonSm.jsx";
import "./Score.css";

function Score({ myScore, allQ, userName1, userName2, userName3 }) {
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
            <div className="orderContainer">
              <div className="bar2">2</div>
              <div className="orderName">
                <div>{userName2}</div>
              </div>
            </div>
            <div className="orderContainer">
              <div className="bar1">1</div>
              <div className="orderName">
                <div>{userName1}</div>
              </div>
            </div>
            <div className="orderContainer">
              <div className="bar3">3</div>
              <div className="orderName">
                <div>{userName3}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stepButtonContainer">
          <StepButtonSm word="Try Again" />
        </div>
      </div>
    </div>
  );
}

export default Score;
