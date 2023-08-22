import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./Components/ToDoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [addlist, setAddlist] = useState([]);

  const list = (inputText) => {
    if (inputText !== "") {
      setAddlist([...addlist, inputText]);
    }
  };

  const deleteItem = (key) => {
    let newListToDo = [...addlist];
    newListToDo.splice(key, 1);
    setAddlist([...newListToDo]);
  };

  return (
    <div class="container">
      <div class="content">
        <ToDoInput listData={list} />
        <h1>TODO</h1>
        <hr />
        {addlist.map((list, index) => {
          return <TodoList key={index} item={list} deleteItem={deleteItem} />;
        })}
      </div>
    </div>
  );
}

export default App;
