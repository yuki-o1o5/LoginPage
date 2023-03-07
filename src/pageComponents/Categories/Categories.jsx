import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import historyImg from "../../images/history.jpg";
import foodImg from "../../images/food.jpg";
import musicImg from "../../images/music.jpg";
import movieImg from "../../images/movie.jpg";
import "./Categories.css";

function Container() {
  const navigate = useNavigate();

  const goToHistoryQuiz = () => {
    navigate("/main/history");
  };

  const goToFoodDrinkQuiz = () => {
    navigate("/main/food_and_drink");
  };

  const goToMusicQuiz = () => {
    navigate("/main/music");
  };

  const goToTvMovieQuiz = () => {
    navigate("/main/film_and_tv");
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
      <div className="categoryCotainer">
        <h2>Let's choose Category</h2>
        <div className="categoryButtonGroup">
          <div className="container">
            <img src={historyImg} alt="History" />
            <Button
              theme={theme}
              variant="contained"
              className="btn"
              sx={{ p: 1.5 }}
              type="submit"
              currsol="point"
              style={{ borderRadius: 10 }}
              onClick={goToHistoryQuiz}
            >
              History
            </Button>
          </div>
          <div className="container">
            <img src={foodImg} alt="Food" />
            <Button
              theme={theme}
              variant="contained"
              className="btn"
              sx={{ p: 1.5 }}
              type="submit"
              currsol="point"
              style={{ borderRadius: 10 }}
              onClick={goToFoodDrinkQuiz}
            >
              Food&Drink
            </Button>
          </div>
          <div className="container">
            <img src={musicImg} alt="Music" />
            <Button
              theme={theme}
              variant="contained"
              className="btn"
              sx={{ p: 1.5 }}
              type="submit"
              currsol="point"
              style={{ borderRadius: 10 }}
              onClick={goToMusicQuiz}
            >
              Music
            </Button>
          </div>
          <div className="container">
            <img src={movieImg} alt="Movie&TV" />
            <Button
              theme={theme}
              variant="contained"
              className="btn"
              sx={{ p: 1.5 }}
              type="submit"
              currsol="point"
              style={{ borderRadius: 10 }}
              onClick={goToTvMovieQuiz}
            >
              Movie&TV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
