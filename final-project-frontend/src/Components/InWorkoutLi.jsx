import React from "react";
import Button from "./Button";
import SetLi from "./SetLi";
import { useState } from "react";

export default function InWorkoutLi({ myKey }) {
  // Hooks
  const [workoutSets, setWorkoutSets] = useState([]);

  // Handler-Functions
  const handleButton_AddSet = (newSet) => {
    setWorkoutSets([...workoutSets, newSet]);
  };

  const randomTest = () => {
    console.log("It finally works?");
  };

  return (
    <li className="inWorkoutLi">
      <div>
        <h3>{myKey}</h3>
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

        <Button key={myKey} label="Add SetLi" onClick_Workout={randomTest} />
      </div>
    </li>
  );
}
