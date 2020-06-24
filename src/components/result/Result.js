import React from "react";
import { useSelector } from "react-redux";
export const Result = () => {
  const total = useSelector(state => state.total);
  const input = useSelector(state => state.input);
  return (
    <div className="container">
      <div className="heading pad">Result</div>
      <div className="pad">Total: {total} </div>
      {input.map(num => (
        <div>- {num}</div>
      ))}
    </div>
  );
};
