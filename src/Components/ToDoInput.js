import React, { useState } from "react";

function ToDoInput({ listData }) {
  const [text, setText] = useState();
  return (
    <div className="input-container">
      Enter Task:
      <input
        className="input-box-todo"
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          listData(text);
          setText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default ToDoInput;
