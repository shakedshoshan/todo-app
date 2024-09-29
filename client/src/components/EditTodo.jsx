import React, { useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  // Edit description function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {/* Edit Button */}
      <button
        type="button"
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none"
        onClick={() => document.getElementById(`id${todo.todo_id}`).classList.remove('hidden')}
      >
        Edit
      </button>

      {/* Modal */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="bg-white rounded-lg w-96 shadow-lg" onClick={(e) => e.stopPropagation()}>
          {/* Modal Header */}
          <div className="px-4 py-3 flex justify-between items-center border-b">
            <h4 className="text-xl font-semibold">Edit Todo</h4>
            <button
              type="button"
              className="text-black hover:text-red-600"
              onClick={() => document.getElementById(`id${todo.todo_id}`).classList.add('hidden')}
            >
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div className="px-4 py-3">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-3 flex justify-end space-x-3 border-t">
            <button
              type="button"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none"
              onClick={updateDescription}
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
              onClick={() => document.getElementById(`id${todo.todo_id}`).classList.add('hidden')}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
