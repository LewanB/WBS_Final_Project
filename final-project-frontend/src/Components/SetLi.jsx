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
        <input id="setWeight" type="number" />
        <label htmlFor="setWeight">kg</label>
        <input id="setReps" type="number" />
      </div>
      <Button label="check icon" />
    </li>
  );
}
