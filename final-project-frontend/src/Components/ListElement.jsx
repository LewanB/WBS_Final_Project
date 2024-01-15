import React from "react";

export default function ListElement() {
  return (
    <li>
      <div>
        <div>
          <input type="date" />
        </div>
        <div>
          <ul>
            <li>Body Part 1</li>
            <li>Body Part 2</li>
            <li>...</li>
          </ul>
        </div>
        <div>Comment overflow hidden</div>
      </div>
    </li>
  );
}
