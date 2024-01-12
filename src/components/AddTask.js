import React from "react";
import "../styles/AddTask.css";

const AddTask = () => {
  return (
    <div>
      <form className="taskForm">
        <input
          className="enter-task"
          type="text"
          name="search"
          placeholder="Enter a task..."
        />
        <button
          className="add-task"
          onClick={(event) => event.preventDefault()}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
