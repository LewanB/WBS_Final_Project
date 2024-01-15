import React from "react";
import Button from "./Button";
import Loglist from "./Loglist";

export default function Landing() {
  return (
    <div>
      <nav>
        <div>LOGO</div>
        {/* <div>searchIcon</div> */}
        <Button text={"Your Exercises"} />
      </nav>

      <h1>Welcome back!</h1>

      <Button text={"New Session"} />

      <Loglist />
    </div>
  );
}
