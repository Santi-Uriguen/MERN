import axios from "axios";
//axios es un package importado (npm i axios) que conecta el front con back haciendo un http request
import React, { useState } from "react";
function CreateTodo() {
  const [state, setState] = useState({
    todo_description: "",
    todo_responsible: "",
    todo_priority: "",
    todo_completed: false,
  });
  const onChangeTodoDescription = (e) => {
    setState((prevstate) => ({
      ...prevstate,
      todo_description: e.target.value,
    }));
  };
  const onChangeTodoResponsible = (e) => {
    setState((prevstate) => ({
      ...prevstate,
      todo_responsible: e.target.value,
    }));
  };
  const onChangeTodoPriority = (e) => {
    setState((prevstate) => ({
      ...prevstate,
      todo_priority: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      todo_description: state.todo_description,
      todo_responsible: state.todo_responsible,
      todo_priority: state.todo_priority,
      todo_completed: state.todo_completed,
    };
    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then((res) => console.log(res.data));
    setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            value={state.todo_description}
            onChange={onChangeTodoDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={state.todo_responsible}
            onChange={onChangeTodoResponsible}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={state.todo_priority === "Low"}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={state.todo_priority === "Medium"}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={state.todo_priority === "High"}
              onChange={onChangeTodoPriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
