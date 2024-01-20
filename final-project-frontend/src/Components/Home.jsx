import React from "react";
import Button from "./Button";
import Loglist from "./Loglist";
import Nav from "./Nav";

export default function Home() {
  return (
    <div id="mainContainer">
      <Nav />

      <h1>Welcome back!</h1>

      <Loglist />
    </div>
  );
}
