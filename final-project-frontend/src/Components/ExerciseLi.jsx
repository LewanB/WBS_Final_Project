import React from "react";
import Button from "./Button";
import { useState, useRef, useEffect } from "react";
import "./Styles/ExerciseLi.css";
import isNullOrWhiteSpace from "../utility/isNullOrWhiteSpace";
import axios from "axios";

export default function ExerciseLi({ kExercise, btnDeleteOnClick }) {
  // console.log("ExerciseLi called!");
  const [editing, setEditing] = useState(!kExercise.name);
  const [name, setName] = useState(kExercise.name);
  const [bodyPart, setBodyPart] = useState(kExercise.body_part);
  const [comment, setComment] = useState(kExercise.comment);

  const URI = `${import.meta.env.VITE_API_BASE_URI}/exercises`;

  const initialName = kExercise.name;

  const nameRef = useRef(null);

  useEffect(() => {
    // Fokussiere das Element nach dem Rendern der Komponente
    if (editing) {
      nameRef.current.focus();
    }
  }, []); // Das leere Array stellt sicher, dass dieser Effekt nur einmal nach dem ersten Rendern ausgeführt wird

  const handleEditClick = () => {
    setEditing(true);
    nameRef.current.focus();
    console.log("Handle Edit clicked!");
  };
  const handleSaveClick = () => {
    console.log("Handle Save clicked!");

    console.log({ message: "Handle Save clicked!", item: kExercise });
    if (!isNullOrWhiteSpace(name)) {
      //check obsolete because css prevents clicking save in this case anyways
      if (initialName === "") {
        //It's a new entry
        console.log("new Entry check passed!");

        let dbEntry = {
          name: `${name.trim()}`,
          body_part: `${bodyPart.trim()}`,
          comment: `${comment.trim()}`,
        };

        console.log({ message: "dbENtry", entry: dbEntry });

        axios
          .put(`${URI}/${name}`, dbEntry)
          .then((response) => {
            if (response.status == 201) {
              console.log("Successfully added exercise!");
              setEditing(false);
              return;
            } else {
              console.log(response);
            }
          })
          .catch((error) => {
            console.log("Could not connect to server!");
            console.log(error);
          });
      } else {
        //initial name given -> change existing entry
        console.log({ message: "Initial Name", initialName });

        let dbEntry = {
          name: `${name.trim()}`,
          body_part: `${bodyPart.trim()}`,
          comment: `${comment.trim()}`,
        };

        console.log({ message: "dbENtry", entry: dbEntry });

        axios
          .put(`${URI}/${initialName}`, dbEntry)
          .then((response) => {
            if (response.status == 200) {
              console.log("Successfully updated exercise!");
              setEditing(false);
              return;
            } else {
              console.log(response);
            }
          })
          .catch((error) => {
            console.log("Could not connect to server!");
            console.log(error);
          });
      }
      setEditing(false); //hack for not reloading, continue testing what is going wrong here
    }
  };

  const handleCancelClick = () => {
    console.log("Handle Cancel clicked!");
  };

  const handleDeleteClick = () => {
    btnDeleteOnClick(initialName);
  };

  return (
    <li id="createExerciseLi">
      <form>
        <label htmlFor="exerciseName">Name</label>
        <input
          ref={nameRef}
          className={!editing ? "editingDisabled" : ""}
          id="exerciseName"
          type="text"
          placeholder="E.g. Bench Press"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="exerciseBodyPart">Body Part</label>
        <input
          className={!editing ? "editingDisabled" : ""}
          id="exerciseBodyPart"
          type="text"
          placeholder="E.g. chest"
          value={bodyPart}
          onChange={(event) => {
            setBodyPart(event.target.value);
          }}
        />

        <label htmlFor="exerciseComment">Comment</label>
        <textarea
          className={!editing ? "editingDisabled" : ""}
          id="exerciseComment"
          type="text"
          placeholder="E.g. focus on slow movement"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <div className="exerciseBtnContainer">
          <div>
            {!editing && (
              <Button
                label="Edit"
                className="btnEditEx"
                onClick={handleEditClick}
              />
            )}
            <div>
              {editing && (
                <Button
                  label="Save"
                  className={!name.trim() ? "btnSaveInactive" : "btnEditingEx"}
                  onClick={handleSaveClick}
                />
              )}
              {editing && (
                <Button
                  label="Cancel"
                  className="btnEditingEx"
                  onClick={handleCancelClick}
                />
              )}
            </div>
          </div>
          <Button label="X" className="btnDelete" onClick={handleDeleteClick} />
        </div>
      </form>
    </li>
  );
}
