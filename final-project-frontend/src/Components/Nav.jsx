import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/exercises">Your Exercises</Link>
        </li>
        <li>
          <Link to="/session_log">Workout Log</Link>
        </li>
      </ul>
    </nav>
  );
}
