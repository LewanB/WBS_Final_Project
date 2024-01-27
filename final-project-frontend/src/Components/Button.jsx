import React from "react";

export default function Button({ onClick, label, className }) {
  const onClickHandle = () => {
    onClick();
  };
  return (
    <button onClick={onClickHandle} className={className}>
      {label}
    </button>
  );
}
