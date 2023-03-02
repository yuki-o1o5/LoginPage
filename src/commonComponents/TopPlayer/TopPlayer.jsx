import "./TopPlayer.css";

function TopPlayer({ order, userName }) {
  return (
    <div className="topPlayerContainer">
      <div className="order">{order}</div>
      <div className="userName">{userName}</div>
    </div>
  );
}

export default TopPlayer;
