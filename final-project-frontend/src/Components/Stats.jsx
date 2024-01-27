import React from "react";
import ListElement from "./ListElement";
import Nav from "./Nav";
import "./Styles/Stats.css";

export default function Stats() {
  return (
    <>
      <Nav />
      <div className="generalContainer">
        <h2>Statistics</h2>
        <ul>
          <ListElement />
        </ul>
      </div>
    </>
  );
}
