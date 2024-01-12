import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const date = new Date();

  const [isActiveItems, setActive] = useState({
    incomplete: true,
    complete: false,
  });

  function whenClicked(item) {
    setActive((current) => {
      if (item === "incomplete" && !current[item]) {
        return { [item]: true, complete: false };
      } else if (item === "complete" && !current[item]) {
        return { incomplete: false, [item]: true };
      } else {
        return { ...current };
      }
    });
  }

  return (
    <div className="header">
      {date.toLocaleDateString("en-US", { weekday: "long" })},{" "}
      {date.toLocaleDateString("en-US", { month: "long" })} {date.getDate()}
      <ul>
        <li
          className={isActiveItems.incomplete ? "active" : ""}
          onClick={() => whenClicked("incomplete")}
        >
          Incomplete Tasks
        </li>
        <li
          className={isActiveItems.complete ? "active" : ""}
          onClick={() => whenClicked("complete")}
        >
          Completed Tasks
        </li>
      </ul>
    </div>
  );
};

export default Header;
