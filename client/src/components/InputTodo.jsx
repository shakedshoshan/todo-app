import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-row items-center">
      <img src='todo-icon.png' alt="logo" className="w-16 h-16 mb-5 absolute left-10 top-4" />
      <h1 className="text-5xl font-semibold mb-5 text-gray-800" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>To-do List</h1>
      </div>
      <form className="flex w-full max-w-lg" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
