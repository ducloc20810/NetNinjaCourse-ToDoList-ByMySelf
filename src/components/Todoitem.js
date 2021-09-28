import React from "react";

export default function Todoitem({ toDoItems, handleCheck }) {
  return (
    <div className="list">
      {toDoItems.map((item) => {
        if (item.status === "todo")
          return (
            <div className="item" key={item.id}>
              <p className="content">{item.content}</p>
              <span
                className="check-icon"
                onClick={() => {
                  handleCheck(item);
                }}
              >
                <i className="fas fa-check"></i>
              </span>
            </div>
          );
        if (item.status === "done")
          return (
            <div className="item done" key={item.id}>
              <p className="content">{item.content}</p>
            </div>
          );
      })}
    </div>
  );
}
