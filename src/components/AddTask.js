import React, { useState } from "react";
import "../styles/AddTask.css";

const AddTask = ({ GetTaskValue, navStatus, NavObjValue, GetNavStatus }) => {
  const [localTaskValue, setLocalTaskValue] = useState("");

  const [error, setError] = useState(false);
  const TaskChanged = (event) => {
    setLocalTaskValue(event.target.value);
  };

  const AddTask = (event) => {
    event.preventDefault();
    if (localTaskValue.length > 0) {
      GetTaskValue(localTaskValue);
      setError(false);
      setLocalTaskValue("");
      if (navStatus === "complete") {
        NavObjValue(true, false);
        GetNavStatus("incomplete");
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="task-form">
      <form>
        <input
          className="enter-task"
          type="text"
          value={localTaskValue}
          name="search"
          placeholder="Enter a task..."
          onChange={TaskChanged}
        />
        <button className="add-task" onClick={AddTask}>
          Add Task
        </button>
      </form>
      {error && <div className="error">Please enter a task</div>}
    </div>
  );
};

export default AddTask;
