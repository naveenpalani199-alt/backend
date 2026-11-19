
import { useState } from "react";

const Task1 = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const clearForm = () => {
    setName("");
    setDate("");
    setStatus("");
    setEditIndex(null);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !date || !status) {
      setError("Please fill all fields correctly");
      return;
    }

    if (editIndex !== null) {
      setTasks(tasks.map((task, index) =>
        index === editIndex
          ? { name: name.trim(), date, status }
          : task
      ));
    } else {
      setTasks([...tasks, { name: name.trim(), date, status }]);
    }

    clearForm();
  };

  const editTask = (task, index) => {
    setName(task.name);
    setDate(task.date);
    setStatus(task.status);
    setEditIndex(index);
    setError("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    clearForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Task 1 - Form Validation
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

          {error && <p className="text-red-600">{error}</p>}

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </form>

        <h3 className="text-xl font-bold mt-5 mb-3">Task List</h3>

        {tasks.map((task, index) => (
          <div key={index} className="bg-gray-100 p-3 mb-2 rounded">
            <p>Name: {task.name}</p>
            <p>Date: {task.date}</p>
            <p>Status: {task.status}</p>

            <button
              onClick={() => editTask(task, index)}
              className="bg-green-600 text-white px-3 py-1 rounded mt-2 mr-2"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(index)}
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

export default Task1;
