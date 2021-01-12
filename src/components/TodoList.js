// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  // for sorting the list based on whether an item has been completed or not
  // const sortedList = props.todos.sort((a, b) => a.completed - b.completed);

  return (
    <div className="todo-list">
      {props.todos.map(item => (
        <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
