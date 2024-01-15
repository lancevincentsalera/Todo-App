import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  // get task stored from local storage
  const [taskValue, setTaskValue] = useState(() => {
    const savedTasks = localStorage.getItem("react-tasks-incomplete");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // save the added tasks to local storage
  useEffect(() => {
    localStorage.setItem("react-tasks-incomplete", JSON.stringify(taskValue));
  }, [taskValue]);

  // get added task and add it to the array of tasks
  const GetTaskValue = (value) => {
    const newTask = {
      id: nanoid(),
      taskDescription: value,
    };
    setTaskValue([...taskValue, newTask]);
  };

  // get nav status - 'incomplete' : 'complete'
  const [navStatus, setNavStatus] = useState("incomplete");

  const GetNavStatus = (status) => {
    setNavStatus(status);
  };

  // flag incomplete task as completed
  const [taskCompleted, setTaskCompleted] = useState(() => {
    const savedCompletedTask = localStorage.getItem("react-tasks-complete");
    return savedCompletedTask ? JSON.parse(savedCompletedTask) : [];
  });

  const CheckedBox = (completedTaskID, completedTaskDescription) => {
    const completedTask = {
      id: completedTaskID,
      taskDescription: completedTaskDescription,
    };
    DeleteTask(completedTaskID);
    setTaskCompleted([...taskCompleted, completedTask]);
  };

  useEffect(() => {
    localStorage.setItem("react-tasks-complete", JSON.stringify(taskCompleted));
  }, [taskCompleted]);

  // delete the task
  const DeleteTask = (id) => {
    if (navStatus === "incomplete") {
      const newIncompleteTasks = taskValue.filter((task) => task.id !== id);
      setTaskValue(newIncompleteTasks);
    } else {
      const newCompletedTasks = taskCompleted.filter((task) => task.id !== id);
      setTaskCompleted(newCompletedTasks);
    }
  };

  // recover completed task
  const RecoverTask = (recoveredID, task) => {
    const recoveredTask = {
      id: recoveredID,
      taskDescription: task,
    };
    DeleteTask(recoveredID);
    setTaskValue([...taskValue, recoveredTask]);
  };

  // get incomplete and complete boolean values

  const [isNavActive, setNavActive] = useState({
    incomplete: true,
    complete: false,
  });

  const NavObjValue = (inc, comp) => {
    setNavActive({
      incomplete: inc,
      complete: comp,
    });
  };

  return (
    <div className="App">
      <Header
        GetNavStatus={GetNavStatus}
        taskCount={taskValue.length}
        nav={isNavActive}
        NavObjValue={NavObjValue}
      />
      <AddTask
        GetTaskValue={GetTaskValue}
        navStatus={navStatus}
        NavObjValue={NavObjValue}
        GetNavStatus={GetNavStatus}
      />
      <TaskList
        incompleteTasks={taskValue}
        completedTasks={taskCompleted}
        navStatus={navStatus}
        CheckedBox={CheckedBox}
        DeleteTask={DeleteTask}
        RecoverTask={RecoverTask}
      />
    </div>
  );
}

export default App;
