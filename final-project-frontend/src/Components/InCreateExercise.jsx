import React from "react";
import Button from "./Button";

export default function InCreateExercise() {
  return (
    <div>
      <h2>Create a new exercise</h2>
      <div>
        <label htmlFor="createExerciseName">Name:</label>
        <input
          id="createExerciseName"
          type="text"
          placeholder="E.g.: Pull-Ups"
        />
        <label htmlFor="createExerciseBodyPart">Target Body Part:</label>
        <input
          id="createExerciseBodyPart"
          type="text"
          placeholder="E.g.: Back"
        />
        <label htmlFor="createExerciseComment">Comment:</label>
        <textarea
          name="comment"
          id="createExerciseComment"
          cols="20"
          rows="5"
          placeholder="E.g.: Focus on slow eccentric movement"></textarea>
        <Button text={"Add to exercises"} />
      </div>
    </div>
  );
}
