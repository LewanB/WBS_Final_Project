// import dotenv from "dotenv";
// dotenv.config();

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import ExerciseLi from "./ExerciseLi";
import Nav from "./Nav";
import axios from "axios";

export default function Exercises() {
  // const dbAccessed = useRef(false);
  const [exercises, setExercises] = useState(null);
  const [loading, setLoading] = useState(true);

  // const URI = `${process.env.API_BASE_URI}/exercises`;
  const URI = `http://localhost:8080/exercises`;

  console.log(URI);

  function getExercisesFromServer() {
    axios
      .get(URI)
      .then((response) => {
        console.log(response.data);
        setExercises(response.data);
        setLoading(false);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        return error;
      });

    // try {
    //   const response = await fetch(URI);
    //   console.log(response.json());
    //   // result = await response.body.json(); //Create array of Exercise object afterwards
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    //   result = null;
    // } finally {
    //
    //   return result;
    // }
  }

  useEffect(() => {
    if (exercises == null) {
      let test = getExercisesFromServer(); //Must return array of Exercise objects
      console.log(test);
    }
  }, []);

  const handleButton_AddExercise = (newEntry) => {
    // newEntry.bEdit = true;
    setExercises([...exercises, newEntry]);
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <Nav />
      <Button label="New exercise" onClick={handleButton_AddExercise} />

      {exercises && !loading ? (
        <ul>
          {exercises.map((newexercise, index) => (
            <ExerciseLi key={index} kExercise={exercises[index]} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
