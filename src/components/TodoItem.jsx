import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo, strikeThrough }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);

  let dispatch = useDispatch();

  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div className="form-check">
          <input
            type="checkbox"
            checked={todo.taskDone}
            onChange={(e) => {
              dispatch(
                updateTodo({
                  ...todo,
                  taskDone: e.target.checked,
                })
              );
            }}
          />
        </div>

        <div className="col">
          {edit ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : strikeThrough ? (
            <h4 className="text-muted">
              <del>{todo.name}</del>
            </h4>
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (edit) {
              setName(todo.name);
            }
            setEdit(!edit);
          }}
        >
          {edit ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
