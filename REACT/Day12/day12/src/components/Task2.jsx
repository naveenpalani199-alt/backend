
import { useState } from "react";

const Task2 = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [editId, setEditId] = useState(null);

  const clearForm = () => {
    setName("");
    setDate("");
    setStatus("");
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !date || !status) {
      return;
    }

    if (editId !== null) {
      setTasks(tasks.map((task) =>
        task.id === editId
          ? { ...task, name: name.trim(), date, status }
          : task
      ));
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        name: name.trim(),
        date,
        status
      };

      setTasks([...tasks, newTask]);
    }

    clearForm();
  };

  const editTask = (task) => {
    setEditId(task.id);
    setName(task.name);
    setDate(task.date);
    setStatus(task.status);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    if (editId === id) {
      clearForm();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Task 2 - Stable ID and Cancel Edit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {editId !== null ? "Update Task" : "Add Task"}
            </button>

            {editId !== null && (
              <button
                type="button"
                onClick={clearForm}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h3 className="text-xl font-bold mt-5 mb-3">Task List</h3>

        {tasks.map((task) => (
          <div key={task.id} className="bg-gray-100 p-3 mb-2 rounded">
            <p>Name: {task.name}</p>
            <p>Date: {task.date}</p>
            <p>Status: {task.status}</p>

            <button
              onClick={() => editTask(task)}
              className="bg-green-600 text-white px-3 py-1 rounded mt-2 mr-2"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task2;
