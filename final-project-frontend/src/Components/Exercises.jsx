import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import ExerciseLi from "./ExerciseLi";
import Nav from "./Nav";
import axios from "axios";

// EXERCISE PROBLEM!!! -> Wenn ich ein Exercise ohne Body_Part hinzufüge und save, dann edit und anschließend cancel klicke, dann verschwindet der Eintrag!

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  const URI = `${import.meta.env.VITE_API_BASE_URI}/exercises`;

  function getExercisesFromServer() {
    axios
      .get(URI)
      .then((response) => {
        if (response.status == 200) {
          setExercises(response.data);
          console.log("Successfully fetched and set Exercises!");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        console.log("Fetching of Exercises failed!");
      });
  }

  useEffect(() => {
    if (!loading) {
      if (exercises.length == 0) {
        //exercises array is empty
        console.log("No Exercises loaded yet, trying to fetch...");
        setLoading(true);
        getExercisesFromServer();
      } else {
        console.log("Exercises already found and loaded!");
      }
    } else {
      console.log("Loading...");
    }
  }, []);

  function handleButton_NewExercise() {
    if (
      !exercises.length || //no entries yet
      exercises[exercises.length - 1].name != "" //last entry has a name -> no freshly added entry yet
    ) {
      console.log("Adding new Exercise...");

      const newEntry = { name: "", body_part: "", comment: "" };

      const tmpArray = [...exercises, newEntry];
      setExercises(tmpArray);
      console.log({ message: "exercises updated", exercises: exercises });
    } else {
      console.log("Exercises not empty, but new exercise is!");
    }
    console.log({
      NOTexercisesLength: !exercises.length,
      exercises0NameNotEmpty: exercises[0].name != "",
    });
  }

  const handleDeleteClick = (initialName) => {
    console.log("Delete Clicked!");
    // Pop-Up "Sure u wanna delete?"
    axios
      .delete(`${URI}/${initialName}`)
      .then((response) => {
        if (response.status == 200) {
          console.log("Successfully deleted exercise!");
          return;
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("Could not connect to server!");
        console.log(error);
      });
  };

  return (
    <>
      <Nav />
      <div id="topContainer"></div>
      <div id="exercisesContainer" className="generalContainer">
        <div className="addExerciseBtnContainer">
          <Button label="New exercise" onClick={handleButton_NewExercise} />
        </div>

        {exercises ? (
          <ul>
            {exercises.map((newexercise, index) => (
              <ExerciseLi
                key={index}
                kExercise={exercises[index]}
                btnDeleteOnClick={handleDeleteClick}
              />
            ))}
          </ul>
        ) : (
          <p id="exercisesLoadingP">Loading...</p>
        )}
        {exercises.length > 3 && (
          <div id="up">
            <a href="#topContainer">^</a>
          </div>
        )}
      </div>
    </>
  );
}
