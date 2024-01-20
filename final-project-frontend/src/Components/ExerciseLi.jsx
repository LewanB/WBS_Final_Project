import React from "react";
import Button from "./Button";
import { useState } from "react";
import "./Styles/ExerciseLi.css";

export default function ExerciseLi({ kExercise }) {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleSaveClick = () => {
    setEditing(false);
  };
  const handleCancelClick = () => {
    setEditing(false);
  };

  let bEdit = false;
  return (
    <li id="createExerciseLi">
      <label htmlFor="exerciseName">Name</label>
      <input
        className={!editing ? "editingDisabled" : ""}
        id="exerciseName"
        type="text"
        placeholder="E.g. Bench Press"
        value={kExercise.name}
      />

      <label htmlFor="exerciseBodyPart">Body Part</label>
      <input
        className={!editing ? "editingDisabled" : ""}
        id="exerciseBodyPart"
        type="text"
        placeholder="E.g. chest"
        value={kExercise.body_part}
      />

      <label htmlFor="exerciseComment">Comment</label>
      <textarea
        className={!editing ? "editingDisabled" : ""}
        id="exerciseComment"
        type="text"
        placeholder="E.g. focus on slow movement"
        value={kExercise.comment}
      />

      {!editing && <Button label="Edit" onClick={handleEditClick} />}
      <div>
        {editing && <Button label="Save" onClick={handleSaveClick} />}
        {editing && <Button label="Cancel" onClick={handleCancelClick} />}
      </div>
    </li>
  );
}
