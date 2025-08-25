import { useState, useEffect } from "react";
import { updateProject, getProjectById } from "../apiService/allApi";

const UpdateProject = ({ projectId, onClose }) => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    status: "active",
    deadline: "",
  });
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getProjectById(projectId, headers);
        const data = res.data;
        console.log(data);
        setProject({
          title: data.title,
          description: data.description,
          status: data.status,
          deadline: data.deadline ? data.deadline.split("T")[0] : "",
        });
      } catch (err) {
        console.error("Error fetching project:", err);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateProject(projectId, project, headers);
      alert("✅ Project updated successfully!");
      onClose();
    } catch (err) {
      console.error("Error updating project:", err);
      alert("❌ Failed to update project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Update Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
          rows={3}
        />

        <select
          value={project.status}
          onChange={(e) => setProject({ ...project, status: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="archived">Archived</option>
        </select>

        <input
          type="date"
          value={project.deadline}
          onChange={(e) => setProject({ ...project, deadline: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
