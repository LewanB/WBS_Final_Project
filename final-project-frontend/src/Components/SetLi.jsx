import React from "react";
import Button from "./Button";

export default function SetLi() {
  return (
    <li>
      <div>
        <span>Set</span>
        <span>Weight</span>
        <span>Reps</span>
      </div>
      <div>
        <label htmlFor="setWeight">kg</label>
        <input id="setWeight" type="number" />
        <input id="setReps" type="number" />
      </div>
      <Button icon={"check icon"} />
    </li>
  );
}
