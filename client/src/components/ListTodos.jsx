import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Delete todo function
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get todos function
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="mt-10 flex justify-center">
      <table className="table-auto w-full max-w-4xl text-center border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border-b-2 border-gray-300">Description</th>
            <th className="px-4 py-2 border-b-2 border-gray-300">Time Created</th>
            <th className="px-4 py-2 border-b-2 border-gray-300">Date Created</th>
            <th className="px-4 py-2 border-b-2 border-gray-300">Edit</th>
            <th className="px-4 py-2 border-b-2 border-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id} className="border-t bg-white hover:bg-[#cfd1f1] hover:scale-105 transition-all duration-300">
              <td className="px-4 py-2 border-b border-gray-300">{todo.description}</td>
              <td className="px-4 py-2 border-b border-gray-300">{new Date(todo.date_created).toLocaleTimeString()}</td>
              <td className="px-4 py-2 border-b border-gray-300">{new Date(todo.date_created).toLocaleDateString()}</td>
              <td className="px-4 py-2 border-b border-gray-300">
                <EditTodo todo={todo} />
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none shadow-md"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
