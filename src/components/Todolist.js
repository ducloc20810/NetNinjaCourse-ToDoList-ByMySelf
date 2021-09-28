import React from "react";

import Todoitem from "./Todoitem";

export default function Todolist({ data, isPending, error, refresh }) {
  const handleCheck = (item) => {
    console.log(item);
    const updatePack = {
      status: "done",
    };
    fetch(`http://localhost:8000/items/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatePack),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="toDoList">
      <h2>Board</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <Todoitem toDoItems={data} handleCheck={handleCheck} />}
    </div>
  );
}
