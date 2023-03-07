import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Score.css";

function Score({ myScore, allQ, userName1, userName2, userName3 }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const goToCategoriesPage = () => {
    navigate("/start");
  };

  const goToLoginPage = () => {
    navigate("/");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#39707a",
      },
    },
  });

  return (
    <div className="primaryContainer">
      <div className="scoreCotainer">
        <div className="myScore">
          <h2>Your Score</h2>
          <div className="score">
            {myScore}
            <span> / {allQ}</span>
          </div>
        </div>
        <div className="topPlayers">
          <div className="barsContainer">
            <h2>Top 3 players</h2>
            <div className="topPlayersList">
              <div className="orderContainer">
                <div className="bar2">2</div>
              </div>
              <div className="orderContainer">
                <div className="bar1">1</div>
              </div>
              <div className="orderContainer">
                <div className="bar3">3</div>
              </div>
            </div>
            <hr className="underBar" />
          </div>
          <div className="topPlayersNameContainer">
            <div className="username">{userName2}</div>
            <div className="username">{userName1}</div>
            <div className="username">{userName3}</div>
          </div>
        </div>
        <div className="stepButtonContainer">
          <Button
            theme={theme}
            variant="contained"
            className="submitButton"
            sx={{ p: 1.5 }}
            type="submit"
            currsol="point"
            style={{ borderRadius: 10 }}
            onClick={goToCategoriesPage}
          >
            Retry
          </Button>
          <Button
            theme={theme}
            variant="contained"
            className="submitButton"
            sx={{ p: 1.5 }}
            type="submit"
            currsol="point"
            style={{ borderRadius: 10 }}
            onClick={goToLoginPage}
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Score;
