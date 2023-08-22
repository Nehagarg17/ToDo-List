import React from "react";

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <button
        className="button"
        onClick={() => {
          props.deleteItem(props.index);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoList;
