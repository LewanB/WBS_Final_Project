import React from "react";

export default function Button({ onClick, label }) {
  const onClickHandle = () => {
    onClick();
  };
  return <button onClick={onClickHandle}>{label}</button>;
}
