import React from "react";
import Button from "./Button";
import ListElementExercise from "./ListElementExercise";

export default function Exercises() {
  return (
    <>
      <nav>
        <Button text={"Back to Home"} />
        <input type="text" />
        <Button text={"Add Exercise"} />
      </nav>

      <ul>
        <ListElementExercise />
      </ul>
    </>
  );
}
