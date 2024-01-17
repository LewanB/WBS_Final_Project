import React from "react";
import Button from "./Button";
import ExerciseLi from "./ExerciseLi";

export default function Exercises() {
  return (
    <>
      <div>LOGO</div>
      <nav>
        <Button text={"Back to Home"} />
        <input type="text" placeholder="Browse your exercises" />
        <Button text={"Add Exercise"} />
      </nav>

      <ul>
        <ExerciseLi />
      </ul>
    </>
  );
}
