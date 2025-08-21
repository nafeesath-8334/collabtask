import { useEffect, useState } from "react";
import { addTask, getProjectById } from "../apiService/allApi";

const AddTask = ({ projectId, onClose }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const headers = { Authorization: `Bearer ${token}` };

  // ✅ Fetch project members when modal opens
  useEffect(() => {
  const loadMembers = async () => {
    try {
      if (projectId) {
        const project = await getProjectById(projectId, headers);
        const proj = project.data;

        // ✅ Combine both direct members + team members here
        const combinedMembers = [
          ...(proj.members || []),
          ...(proj.team?.members?.map((m) => m.user) || []),
        ];

        setMembers(combinedMembers);
      }
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  };
  loadMembers();
}, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskDetails.title) {
      alert("Task title is required");
      return;
    }

    try {
      setLoading(true);
      await addTask({ ...taskDetails, projectId }, headers);
      alert("✅ Task created successfully!");
      onClose(); // close modal
    } catch (err) {
      console.error("Error creating task:", err);
      alert("❌ Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          type="text"
          placeholder="Task Title"
          value={taskDetails.title}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, title: e.target.value })
          }
          className="w-full border p-2 mb-3 rounded"
          required
        />

        {/* Description */}
        <textarea
          placeholder="Task Description"
          value={taskDetails.description}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, description: e.target.value })
          }
          className="w-full border p-2 mb-3 rounded"
          rows={3}
        />

        {/* Assign To */}
        <select
          value={taskDetails.assignedTo}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, assignedTo: e.target.value })
          }
          className="w-full border p-2 mb-3 rounded"
        >
          <option value="">Assign to...</option>
          {members.map((m) => (
            <option key={m._id} value={m._id}>
              {m.name}
            </option>
          ))}
        </select>

        {/* Due Date */}
        <input
          type="date"
          value={taskDetails.dueDate}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, dueDate: e.target.value })
          }
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
