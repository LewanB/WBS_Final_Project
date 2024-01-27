import React from "react";
import Button from "./Button";
import SessionExerciseLi from "./SessionExerciseLi";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import "./Styles/WorkoutSession.css";

export default function WorkoutSession() {
  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const handleButton_AddToWorkout = (newEntry) => {
    setWorkoutExercises([...workoutExercises, newEntry]);
  };

  useEffect(() => {
    const formatDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };
    setCurrentDate(formatDate());
  }, []);

  const onChangeDate = (event) => {
    setCurrentDate(event.target.value);
  };

  return (
    <>
      <Nav />
      <div className="generalContainer">
        <form id="addSessionForm">
          <h2>New Session</h2>
          <div id="fFormContainer">
            <div>
              {/* <label htmlFor="sessionDate"></label> */}
              <input
                id="sessionDate"
                type="date"
                value={currentDate}
                onChange={onChangeDate}
              />
            </div>
            <div>
              <input id="selectEx" type="text" placeholder="Select exercise" />

              <Button
                label="Add exercise"
                onClick={handleButton_AddToWorkout}
              />
            </div>
          </div>
          <div id="sFormContainer">
            <div>
              <label id="sessionComment">Comment</label>
              <textarea
                name="comment"
                id="sessionComment"
                cols="20"
                rows="5"
                placeholder="Add a comment to your workout"></textarea>
            </div>
          </div>
          <Button className="btnSaveSession" label="Save Session" />
        </form>

        <p className="commentOnWorkout"></p>

        <ul>
          {workoutExercises.map((addexercise, index) => (
            <SessionExerciseLi key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
