import React from "react";
import "../styles/Header.css";

const Header = ({ GetNavStatus, taskCount, nav, NavObjValue }) => {
  const date = new Date();

  function whenClicked(item) {
    GetNavStatus(item);
    if (item === "incomplete") {
      NavObjValue(true, false);
    } else {
      NavObjValue(false, true);
    }
  }

  return (
    <div className="header">
      <div>
        <div className="header-date">
          {date.toLocaleDateString("en-US", { weekday: "long" })},{" "}
          {date.toLocaleDateString("en-US", { month: "long" })} {date.getDate()}
        </div>
        <p className="task-number">
          You have <span>{taskCount}</span> Incomplete Tasks
        </p>
      </div>
      <div>
        <ul>
          <li
            className={nav.incomplete ? "active" : ""}
            onClick={() => whenClicked("incomplete")}
          >
            Incomplete Tasks
          </li>
          <li
            className={nav.complete ? "active" : ""}
            onClick={() => whenClicked("complete")}
          >
            Completed Tasks
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
