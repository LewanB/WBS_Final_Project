import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Exercises from "./Components/Exercises";
import Stats from "./Components/Stats";
import WorkoutSession from "./Components/WorkoutSession";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/new_workout" element={<WorkoutSession />} />
    </Routes>
  );
}

export default App;
