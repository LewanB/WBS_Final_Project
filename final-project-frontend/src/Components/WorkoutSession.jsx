import React from "react";
import Button from "./Button";
import InWorkoutLi from "./InWorkoutLi";
import Nav from "./Nav";
import { useState } from "react";

export default function WorkoutSession() {
  // Hooks
  const [workoutExercises, setWorkoutExercises] = useState([]);

  // Handler-Functions
  const handleButton_AddToWorkout = (newEntry) => {
    setWorkoutExercises([...workoutExercises, newEntry]);
  };

  return (
    <div>
      <Nav />
      <h2>New Session</h2>
      <div>
        <input type="text" placeholder="Select an exercise" />

        <Button label="Add exercise" onClick={handleButton_AddToWorkout} />

        <label htmlFor="sessionDate">Date of Session</label>
        <input id="sessionDate" type="date" />
        <textarea
          name="comment"
          id=""
          cols="20"
          rows="5"
          placeholder="Add a comment"></textarea>
      </div>

      <p className="commentOnWorkout"></p>

      <ul>
        {workoutExercises.map((addexercise, index) => (
          <InWorkoutLi key={index} />
        ))}
      </ul>
    </div>
  );
}
