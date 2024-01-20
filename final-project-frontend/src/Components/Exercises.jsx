import React from "react";
import Button from "./Button";
import ExerciseLi from "./ExerciseLi";
import { useState } from "react";
import Nav from "./Nav";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  const handleButton_AddExercise = (newEntry) => {
    setExercises([...exercises, newEntry]);
  };

  return (
    <div>
      <Nav />
      <Button label="New exercise" onClick={handleButton_AddExercise} />

      <ul>
        {exercises.map((newexercise, index) => (
          <ExerciseLi key={index} />
        ))}
      </ul>
    </div>
  );
}
