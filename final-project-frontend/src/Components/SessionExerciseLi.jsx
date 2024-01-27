import React from "react";
import Button from "./Button";
import SetLi from "./SetLi";
import { useState } from "react";

export default function SessionExerciseLi({ key }) {
  const [workoutSets, setWorkoutSets] = useState([]);

  const handle_AddSet = (newSet) => {
    setWorkoutSets([...workoutSets, newSet]);
  };

  return (
    <li className="sessionExerciseLi">
      <div>
        <h3>Exercise Name</h3>
        <h4>Exercises Bodypart</h4>
        <p>Comment if existent...</p>
      </div>

      <div>
        <ul>
          {workoutSets.map((set, index) => (
            <SetLi key={index} />
          ))}
        </ul>

        <Button key={key} label="New set" onClick={handle_AddSet} />
      </div>
    </li>
  );
}
