import React from "react";
import Task from "./Task";
import "../styles/TaskList.css";

const TaskList = ({
  incompleteTasks,
  completedTasks,
  navStatus,
  CheckedBox,
  DeleteTask,
  RecoverTask,
}) => {
  return (
    <div>
      {navStatus === "incomplete" ? (
        incompleteTasks.length > 0 ? (
          <div className="tasks">
            {incompleteTasks.map((task) => (
              <Task
                key={task.id}
                taskKey={task.id}
                task={task.taskDescription}
                CheckedBox={CheckedBox}
                status={navStatus}
                DeleteTask={DeleteTask}
              />
            ))}
          </div>
        ) : (
          <div className="zero-tasks">
            <p className="zero-tasks-text">
              You currently have <strong>0</strong> incomplete tasks. Nice!
            </p>
          </div>
        )
      ) : (
        <div className="tasks">
          {completedTasks.map((completedTask) => (
            <Task
              key={completedTask.id}
              taskKey={completedTask.id}
              task={completedTask.taskDescription}
              CheckedBox={CheckedBox}
              status={navStatus}
              DeleteTask={DeleteTask}
              RecoverTask={RecoverTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
