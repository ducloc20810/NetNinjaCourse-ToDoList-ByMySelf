import React, { useState } from "react";

export default function Header({ refresh }) {
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      content: input,
      status: "todo",
    };
    setIsPending(true);
    fetch("http://localhost:8000/items", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status !== 201) {
          throw Error("Opps something is wrong!!!!!");
        }
      })
      .then(() => {
        setIsPending(false);
        setError(null);
        refresh();
        console.log("Item added");
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };
  return (
    <div className="header">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        {!isPending && <button className="addBtn">Add item</button>}
        {isPending && (
          <button className="addBtn" disabled>
            Adding...
          </button>
        )}

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
