import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_RESULT } from "../../store/actions";

export const Add = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    dispatch({
      type: UPDATE_RESULT,
      payload: input
    });
    setInput("");
  };

  return (
    <div className="container">
      <div className="heading pad">Add</div>
      <div>
        <textarea
          placeholder="Enter numbers seprated by comma"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary add-btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};
