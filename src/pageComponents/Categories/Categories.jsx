import { Link } from "react-router-dom";
import historyImg from "../../images/history.jpg";
import foodImg from "../../images/food.jpg";
import musicImg from "../../images/music.jpg";
import movieImg from "../../images/movie.jpg";
import "./Categories.css";

function Container() {
  // https://the-trivia-api.com/api/questions?categories=film_and_tv,food_and_drink,general_knowledge,geography,history&limit=5
  return (
    <div className="primaryContainer">
      <div className="categoryCotainer">
        <h2>Let's choose Category</h2>
        <div className="categoryButtonGroup">
          <div className="container">
            <img src={historyImg} alt="History" />
            <button className="btn">
              {" "}
              <Link to="/main/history">History</Link>
            </button>
          </div>
          <div className="container">
            <img src={foodImg} alt="Food" />
            <button className="btn">
              {" "}
              <Link to="/main/food_and_drink">Food</Link>
            </button>
          </div>
          <div className="container">
            <img src={musicImg} alt="Music" />
            <button className="btn">
              <Link to="/main/music">Music</Link>
            </button>
          </div>
          <div className="container">
            <img src={movieImg} alt="Movie&TV" />
            <button className="btn">
              {" "}
              <Link to="/main/film_and_tv">Movie&TV</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
