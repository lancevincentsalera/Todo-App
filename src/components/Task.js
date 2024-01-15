import React from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiUndo } from "react-icons/ci";
import "../styles/Task.css";

const Task = ({
  taskKey,
  task,
  CheckedBox,
  status,
  DeleteTask,
  RecoverTask,
}) => {
  const TaskCompleted = () => {
    CheckedBox(taskKey, task);
  };

  const RemoveTask = () => {
    DeleteTask(taskKey);
  };

  const Recover = () => {
    RecoverTask(taskKey, task);
  };

  return status === "incomplete" ? (
    <div className="task">
      <div className="check-and-text">
        <MdOutlineCheckBox
          className="check-box"
          size="3rem"
          onClick={TaskCompleted}
        />
        <p className="text">{task}</p>
      </div>
      <MdDeleteOutline className="delete" size="3rem" onClick={RemoveTask} />
    </div>
  ) : (
    <div className="task">
      <div className="recover-and-completed-text">
        <CiUndo className="undo" size="3rem" onClick={Recover} />
        <p className="completed-text">{task}</p>
      </div>
      <MdDeleteOutline className="delete" size="3rem" onClick={RemoveTask} />
    </div>
  );
};

export default Task;
