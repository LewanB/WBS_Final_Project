import React from "react";

export default function Button({ onClick_Workout }) {
  const onClickHandle = () => {
    console.log("Something hapend");
    onClick_Workout();
  };
  return <button onClick={onClickHandle}></button>;
}
