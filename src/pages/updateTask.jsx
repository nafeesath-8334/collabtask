import { useState, useEffect } from "react";
import { updateTask, getTaskById } from "../apiService/allApi";

const UpdateTask = ({ taskId, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await getTaskById(taskId, headers);
        const data = res.data;
        setTask({
          title: data.title,
          description: data.description,
          status: data.status,
          priority: data.priority,
          dueDate: data.dueDate ? data.dueDate.split("T")[0] : "",
        });
      } catch (err) {
        console.error("Error fetching task:", err);
      }
    };
    fetchTask();
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateTask(taskId, task, headers);
      alert("✅ Task updated successfully!");
      onClose();
    } catch (err) {
      console.error("Error updating task:", err);
      alert("❌ Failed to update task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Update Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Task Title"
          className="w-full border p-2 mb-3 rounded"
          required
        />
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Task Description"
          className="w-full border p-2 mb-3 rounded"
          rows={3}
        />
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          {loading ? "Updating..." : "Update Task"}
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
