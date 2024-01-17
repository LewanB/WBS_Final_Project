import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Exercises from "./Components/Exercises";
import WorkoutSession from "./Components/WorkoutSession";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/session_log" element={<WorkoutSession />} />
    </Routes>
  );
}

export default App;
