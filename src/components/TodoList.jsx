import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  let todos = useSelector((state) => state);

  let doneTodos = todos.filter((value) => value.taskDone === true);
  let notDoneTodos = todos.filter((value) => value.taskDone === false);

  return (
    <div className="my-4">
      <h3 className="my-4"> Todo</h3>
      <div className="dropdown-divider"></div>

      {notDoneTodos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} />;
      })}

      {notDoneTodos.length === 0 && (
        <h5 className="text-muted text-center">No Todos!</h5>
      )}

      <h3 className="my-4">Completed</h3>
      <div className="dropdown-divider"></div>

      {doneTodos.map((todos, index) => {
        return <TodoItem key={index} todo={todos} strikeThrough />;
      })}

      {doneTodos.length === 0 && (
        <h5 className="text-muted text-center">Complete your task quickly!</h5>
      )}
    </div>
  );
}

export default TodoList;
