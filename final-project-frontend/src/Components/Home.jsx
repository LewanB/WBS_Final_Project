import React from "react";
import Button from "./Button";
import Loglist from "./Loglist";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <h1>Welcome back!</h1>

      <Button label="New Session" />

      <Loglist />
    </>
  );
}
