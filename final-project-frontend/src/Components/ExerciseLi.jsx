import React from "react";
import Button from "./Button";
import "./Styles/ExerciseLi.css";

export default function ExerciseLi() {
  return (
    <li id="createExerciseLi">
      <label htmlFor="exerciseName">Name</label>
      <input id="exerciseName" type="text" placeholder="E.g. Bench Press" />

      <label htmlFor="exerciseBodyPart">Body part</label>
      <input id="exerciseBodyPart" type="text" placeholder="E.g. chest" />

      <label htmlFor="exerciseComment">Comment</label>
      <textarea
        id="exerciseComment"
        type="text"
        placeholder="E.g. focus on slow movement"
      />

      {false && <Button label="Edit" />}
      <div>
        {true && <Button label="Save" />}
        {true && <Button label="Cancel" />}
      </div>
    </li>
  );
}
