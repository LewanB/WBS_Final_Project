import React from "react";
import Button from "./Button";

export default function ExerciseLi() {
  return (
    <li>
      <input type="text" />
      <Button text={"Edit"} />

      {false && <Button text={"Save"} />}
      {false && <Button text={"Cancel"} />}
    </li>
  );
}
