import React from "react";
import { Link } from "react-router-dom";
import "./score.css";

export default function ScoreScreenComponent() {
  const [score, setScore] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(function () {
    const savedScore = localStorage.getItem("score");
    setScore(savedScore);
  });
  return (
    <div className="main-score">
      <p className="user-name"> Hi {user.name}, </p>
      <p className="user-score">
        {" "}
        YOUR SCORE IS   {score}
      </p>
      <Link className="scoreboard" to="../scoreboard">View ScoreBoard</Link>
    </div>
  );
}
