import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/exercises">Your Exercises</Link>
        </li>
        <li>
          <Link to="/new_workout">Add a workout</Link>
        </li>
        <li>
          <Link to="/session_log">Workout log</Link>
        </li>
      </ul>
    </nav>
  );
}
